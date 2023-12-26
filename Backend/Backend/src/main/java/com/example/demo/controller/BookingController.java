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

import com.example.demo.dao.BookingDao;
import com.example.demo.entity.Booking;
import com.example.demo.entity.Bus;
import com.example.demo.entity.User;
import com.example.demo.service.BookingService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {
	 @Autowired
	    BookingService service;
	    @Autowired

	    BookingDao dao;
//	    @PostMapping("/bookTrip")
//	    public ResponseEntity<Map<String,String>> singup(@RequestBody Booking booking)
//	    {
//	        this.service.addBooking(booking);
//	        Map<String,String> response=new HashMap<String,String>();
//	        response.put("status", "success");
//	        response.put("message", "Booking registered!!");
//	        response.put("bookingid", "booking_id");
//	        
//	        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
//	    }
	    @PostMapping("/bookTrip")
	    public ResponseEntity<Map<String, Object>> singup(@RequestBody Booking booking) {

	    	// Log the complete request body
	        System.out.println("Request Body: " + booking.toString());
	        Map<String, Object> busDetails = service.addBooking(booking);

	        Map<String, Object> response = new HashMap<>();
	        response.put("status", "success");
	        response.put("message", "Booking registered!!");
	        response.put("busDetails", busDetails);
	        
	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	        
	        
	    }
	    @PostMapping("/bookTripcar")
	    public ResponseEntity<Map<String, Object>> singup3(@RequestBody Booking booking) {

	    	// Log the complete request body
	        System.out.println("Request Body: " + booking.toString());
	        Map<String, Object> carDetails = service.carBooking(booking);

	        Map<String, Object> response = new HashMap<>();
	        response.put("status", "success");
	        response.put("message", "Booking registered!!");
	        response.put("carDetails", carDetails);

	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	    }
	    @PostMapping("/bookTriptrain")
	    public ResponseEntity<Map<String, Object>> singup1(@RequestBody Booking booking) {

	    	// Log the complete request body
	        System.out.println("Request Body: " + booking.toString());
	        Map<String, Object> trainDetails = service.trainBooking(booking);

	        Map<String, Object> response = new HashMap<>();
	        response.put("status", "success");
	        response.put("message", "Booking registered!!");
	        response.put("trainDetails", trainDetails);
	        
	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	        
	        
	    }
	    @PostMapping("/bookTripflight")
	    public ResponseEntity<Map<String, Object>> singup2(@RequestBody Booking booking) {

	    	// Log the complete request body
	        System.out.println("Request Body: " + booking.toString());
	        Map<String, Object> flightDetails = service.flightBooking(booking);

	        Map<String, Object> response = new HashMap<>();
	        response.put("status", "success");
	        response.put("message", "Booking registered!!");
	        response.put("flightDetails", flightDetails);
	        
	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	        
	        
	    }
	    
	    @GetMapping("/view")
	    public ResponseEntity<List<Booking>>findAll()
	    {
	        return new ResponseEntity<List<Booking>>(this.service.findALL(), HttpStatus.OK);
	    }
	    @GetMapping("/find/{Booking_id}")
	    public ResponseEntity<?> getUserByID(@PathVariable int userid)
	    {
	        if(this.service.findUserById(userid).isPresent())
	        {
	            return new ResponseEntity<Booking>(this.service.findUserById(userid).get(),HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<String>("User Id  not found!",HttpStatus.NOT_FOUND);
	        }
	    }
	    @PutMapping("/update")
	    public ResponseEntity<Map<String,String>> updateBooking(@RequestBody Booking b)
	    {
	        try
	        {
	            if(this.dao.findById(b.getBooking_id()).isPresent())
	            {
	            Booking existingEmp=this.dao.findById(b.getBooking_id()).get();
	            existingEmp.setBooking_id(b.getBooking_id());
	            existingEmp.setArrival(b.getArrival());
	           
	            existingEmp.setDate(b.getDate());
	            existingEmp.setDeparture(b.getDeparture());
	            existingEmp.setSource(b.getSource());
	            existingEmp.setDestination(b.getDestination());
	            existingEmp.setStatus(b.getStatus());
	            existingEmp.setUser(b.getUser());
	            
	            this.service.addBooking(b);
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "success");
	            response.put("message", "Booking data updated!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
	            }
	            else
	            {
	                Map<String,String> response=new HashMap<String,String>();
	                response.put("status", "failed");
	                response.put("message", "Booking data  not found!!");
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
	    @DeleteMapping("/delete/{Booking_id}")
	    public ResponseEntity<Map<String,String>> deleteBooking(@PathVariable(name="id")int booking_id)
	    {
	        try
	        {
	            this.service.deleteById(booking_id);
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "success");
	            response.put("message", "booking_id  data deleted!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
	        }
	        catch(Exception e)
	        {
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "failed");
	            response.put("message", "booking_id data not deleted!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
	        }
	    }
	   
	    @GetMapping("/bookingid/{booking_id}")
	    public ResponseEntity<Booking> getBookingById(@PathVariable int booking_id) {
	        System.out.println("Received a request to get menu item by ID: " + booking_id);

	        Optional<Booking> booking = service.findByBookingId(booking_id);

	        if (booking.isPresent()) {
	            System.out.println("Returning booking item: " + booking.get());
	            return new ResponseEntity<>(booking.get(), HttpStatus.OK);
	        } else {
	            System.out.println("booking item not found for ID: " + booking_id);
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

}
