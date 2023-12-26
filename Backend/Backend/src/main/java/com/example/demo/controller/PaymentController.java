package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.example.demo.dao.PaymentDao;
import com.example.demo.entity.Booking;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Payment;
import com.example.demo.entity.User;
import com.example.demo.service.PaymentService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/Payment")
public class PaymentController {
	  @Autowired
	   PaymentService service;
	    @Autowired

	    PaymentDao dao;
	    
	   /* @PostMapping("/pay")
	    public ResponseEntity<Map<String,String>> singup(@RequestBody Payment payment)
	    {
	        this.service.addPay(payment);
	        Map<String,String> response=new HashMap<String,String>();
	        response.put("status", "success");
	        response.put("message", "User registered!!");
	        
	        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
	    }*/
	    
	    @PostMapping("/pay")
	    public ResponseEntity<Map<String, Object>> singup(@RequestBody Payment p) {
	    	
	    	// Log the complete request body
	        System.out.println("Request Body: " + p.toString());
	       
	    	this.service.savepayment(p);
	        Map<String, Object> response = new HashMap<>();
	        response.put("status", "success");
	        response.put("message", "Payment registered!!");
	        
	              
	        return new ResponseEntity<>(response, HttpStatus.CREATED);
	        
			
	    }
	    @GetMapping("/view")
	    public ResponseEntity<List<Payment>> findAll()
	    {
	        return new ResponseEntity<List<Payment>>(this.service.findALL(), HttpStatus.OK);
	    }
	    @GetMapping("/find/{Paymentid}")
	    public ResponseEntity<?> getUserByID(@PathVariable int Paymentid)
	    {
	        if(this.service.findUserById(Paymentid).isPresent())
	        {
	            return new ResponseEntity<Payment>(this.service.findUserById(Paymentid).get(),HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<String>("User Id  not found!",HttpStatus.NOT_FOUND);
	        }
	    }
	    @GetMapping("/find/{payment_id}")
	    public ResponseEntity<?> getUserByID1(@PathVariable int payment_id)
	    {
	        if(this.service.findUserById(payment_id).isPresent())
	        {
	            return new ResponseEntity<Payment>(this.service.findUserById(payment_id).get(),HttpStatus.OK);
	        }
	        else
	        {
	            return new ResponseEntity<String>("User Id  not found!",HttpStatus.NOT_FOUND);
	        }
	    }
	    @PutMapping("/update")
	    public ResponseEntity<Map<String,String>> updatePayment(@RequestBody Payment p)
	    {
	        try
	        {
	            if(this.dao.findById(p.getPayment_id()).isPresent())
	            {
	            Payment existing=this.dao.findById(p.getPayment_id()).get();
	            existing.setBooking(p.getBooking());
	            existing.setAmount(p.getAmount());
	            existing.setCardNumber(p.getCardNumber());
	            existing.setCvv(p.getCvv());
	            existing.setExpYear(p.getExpYear());
	            existing.setMethod(p.getMethod());
	            existing.setPaidDate(p.getPaidDate());
	            existing.setPayment_id(p.getPayment_id());
	            
	            this.service.addPay(p);
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "success");
	            response.put("message", "Pay data updated!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
	            }
	            else
	            {
	                Map<String,String> response=new HashMap<String,String>();
	                response.put("status", "failed");
	                response.put("message", "pay data  not found!!");
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
	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Map<String,String>> deletePayment(@PathVariable(name="payment_id")int  payment_id)
	    {
	        try
	        {
	            this.service.deleteById(payment_id);
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "success");
	            response.put("message", "Pay  data deleted!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
	        }
	        catch(Exception e)
	        {
	            Map<String,String> response=new HashMap<String,String>();
	            response.put("status", "failed");
	            response.put("message", "Pay data not deleted!!");
	            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
	        }
	    }
	  
}
