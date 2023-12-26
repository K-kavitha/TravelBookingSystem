package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.BusDao;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Flight;
import com.example.demo.entity.User;
import com.example.demo.service.BusService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/Bus")
public class BusController {
	@Autowired
	BusService service;
    @Autowired

    BusDao dao;
    
    @PostMapping("/addbus")
    public ResponseEntity<Map<String,String>> singup(@RequestBody Bus bus)
    {
        this.service.addBus(bus);
        Map<String,String> response=new HashMap<String,String>();
        response.put("status", "success");
        response.put("message", "User registered!!");
        
        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
    }
    
    @GetMapping("/viewbus")
    public ResponseEntity<List<Bus>> findAll()
    {
    	System.out.println("Received a view request for user: " );
        return new ResponseEntity<List<Bus>>(this.service.findALL(), HttpStatus.OK);
    }
    @GetMapping("/bus_id/{Id}")
    public ResponseEntity<Bus> getOrderById(@PathVariable int Id) {
        System.out.println("Received a request to get bus  by ID: " + Id);

        Optional<Bus> bus = service.findBusById(Id);

        if (bus.isPresent()) {
            System.out.println("Returning bus: " + bus.get());
            return new ResponseEntity<>(bus.get(), HttpStatus.OK);
        } else {
            System.out.println("Bus not found for ID: " +Id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateBus(@RequestBody Bus b)
    {
        try
        {
            if(this.dao.findById(b.getBusId()).isPresent())
            {
            	System.out.println("Busid"+b.getBusId());
            Bus existing=this.dao.findById(b.getBusId()).get();
            existing.setBusName(b.getBusName());
            existing.setBusNumber(b.getBusNumber());
            existing.setCapacity(b.getCapacity());
            existing.setDeparture(b.getDeparture());
            existing.setArrival(b.getArrival());
            existing.setSource(b.getSource());
            existing.setDestination(b.getDestination());
            
           
            
            this.service.addBus(b);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Bus data updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "Bus data  not found!!");
                return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e1)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Comment not updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/delete/{Id}")
    public ResponseEntity<Map<String,String>> deleteBus(@PathVariable(name="Id")int busId )
    {
        try
        {
            this.service.deleteById(busId);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Bus  data deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
        }
        catch(Exception e)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Bus data not deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/findBuses")
    public List<Bus> findBusesBySourceAndDestination(
            @RequestParam("source") String source
            ) {
        return dao.findBySourceAndDestination(source);
    }
    @GetMapping("/search/{source}")
	public ResponseEntity<List<Bus>> getEmployeeByEname(String source)
	{
		//postTitle=postTitle.toLowerCase();
		return new ResponseEntity<List<Bus>>(this.service.findByEname(source), HttpStatus.OK);
	}

}
