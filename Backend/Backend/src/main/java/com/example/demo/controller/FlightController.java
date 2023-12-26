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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.FlightDao;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Flight;
import com.example.demo.service.FlightService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/Flight")
public class FlightController {
	
	@Autowired
	FlightService service;
    @Autowired

    FlightDao dao;
    @PostMapping("/addflight")
    public ResponseEntity<Map<String,String>> singup(@RequestBody Flight flight)
    {
        this.service.addFlight(flight);
        Map<String,String> response=new HashMap<String,String>();
        response.put("status", "success");
        response.put("message", "User registered!!");
        
        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
    }
    
    @GetMapping("/view")
    public ResponseEntity<List<Flight>> findAll()
    {
        return new ResponseEntity<List<Flight>>(this.service.findALL(), HttpStatus.OK);
    }
    
    @GetMapping("/flightid/{Id}")
    public ResponseEntity<Flight> getOrderById(@PathVariable int Id) {
        System.out.println("Received a request to get flight  by ID: " + Id);

        Optional<Flight> flight = service.findFlightById(Id);

        if (flight.isPresent()) {
            System.out.println("Returning flight: " + flight.get());
            return new ResponseEntity<>(flight.get(), HttpStatus.OK);
        } else {
            System.out.println("Flight not found for ID: " +Id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateFlight(@RequestBody Flight f)
    {
        try
        {
            if(this.dao.findById(f.getFlightId()).isPresent())
            {
            Flight existing=this.dao.findById(f.getFlightId()).get();
            existing.setAirline(f.getAirline());
            existing.setCapacity(f.getCapacity());
            existing.setDeparture(f.getDeparture());
            existing.setArrival(f.getArrival());
            existing.setSource(f.getSource());
            existing.setDestination(f.getDestination());
            
           
            
            this.service.addFlight(f);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Flight data updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "Flight data  not found!!");
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
    public ResponseEntity<Map<String,String>> deleteFlight(@PathVariable(name="Id")int flightId )
    {
        try
        {
            this.service.deleteById(flightId);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Flight  data deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
        }
        catch(Exception e)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Flight data not deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
        }
    }

}
