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


import com.example.demo.dao.TrainDao;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Train;
import com.example.demo.service.TrainService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/Train")
public class TrainController {
	@Autowired
	TrainService service;
    @Autowired

    TrainDao dao;
    @PostMapping("/addTrain")
    public ResponseEntity<Map<String,String>> singup(@RequestBody Train train)
    {
        this.service.addTrain(train);
        Map<String,String> response=new HashMap<String,String>();
        response.put("status", "success");
        response.put("message", "Train registered!!");
        
        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
    }
    
    @GetMapping("/viewtrain")
    public ResponseEntity<List<Train>> findAll()
    {
        return new ResponseEntity<List<Train>>(this.service.findALL(), HttpStatus.OK);
    }
    @GetMapping("/train_id/{Id}")
    public ResponseEntity<Train> getOrderById(@PathVariable int Id) {
        System.out.println("Received a request to get train  by ID: " + Id);

        Optional<Train> train = service.findTrainById(Id);

        if (train.isPresent()) {
            System.out.println("Returning train: " + train.get());
            return new ResponseEntity<>(train.get(), HttpStatus.OK);
        } else {
            System.out.println("train not found for ID: " +Id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateBus(@RequestBody Train t)
    {
        try
        {
            if(this.dao.findById(t.getTrainId()).isPresent())
            {
            Train existing=this.dao.findById(t.getTrainId()).get();
            existing.setTrainNumber(t.getTrainNumber());
            existing.setTrainName(t.getTrainName());
            existing.setCapacity(t.getCapacity());
            existing.setDeparture(t.getDeparture());
            existing.setArrival(t.getArrival());
            existing.setSource(t.getSource());
            existing.setDestination(t.getDestination());
            
           
            
            this.service.addTrain(t);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Train data updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "Train data  not found!!");
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
    public ResponseEntity<Map<String,String>> deleteTrain(@PathVariable(name="Id")int trainId )
    {
        try
        {
            this.service.deleteById(trainId);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Train  data deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
        }
        catch(Exception e)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Train data not deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
        }
    }

}
