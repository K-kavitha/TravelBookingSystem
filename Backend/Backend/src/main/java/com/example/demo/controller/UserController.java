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
import com.example.demo.service.EmailService;
import com.example.demo.dao.UserDao;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController
{
	@Autowired
	private EmailService emailService;
    @Autowired
    UserService service;
    @Autowired

    UserDao dao;
    
    @PostMapping("/signup")
    public ResponseEntity<Map<String,String>> singup(@RequestBody User user)
    {
    	System.out.println("Received a signup request for user: " + user.getUsername());
        this.service.addUser(user);
        System.out.println("User registered: " + user);
        
       
        Map<String,String> response=new HashMap<String,String>();
        //EmailService emailservice = null;
		emailService.sendEmail(user.getEmail_id(), "SignUp Email",
        	"Welcome Our Booking Website \n SignUP is Successful in Travel Booking.\nYour username is:  \n CONTACT US : our website " 
      + user.getUsername());
        response.put("status", "success");
        response.put("message", "User registered!!");
        
        return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
    }
    
    @GetMapping("/viewUser")
    public ResponseEntity<List<User>>findAll()
    {
        return new ResponseEntity<List<User>>(this.service.findALL(), HttpStatus.OK);
    }
    @GetMapping("/find/{userid}")
    public ResponseEntity<?> getUserByID(@PathVariable int userid)
    {
        if(this.service.findUserById(userid).isPresent())
        {
            return new ResponseEntity<User>(this.service.findUserById(userid).get(),HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<String>("User Id  not found!",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws Exception {
        System.out.println("Received a request to get customer by username: " + username);

        User user = service.findByUsername(username);
        if (user == null) {
            System.out.println("Customer not found for username: " + username);
            throw new Exception("Customer with username " + username + " not found.");
        }

        System.out.println("Returning customer for username: " + user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateUser(@RequestBody User e)
    {
        try
        {
            if(this.dao.findById(e.getUserid()).isPresent())
            {
            User existingEmp=this.dao.findById(e.getUserid()).get();
            existingEmp.setFirst_name(e.getFirst_name());
            existingEmp.setLast_name(e.getLast_name());
           
            existingEmp.setUsername(e.getUsername());
            existingEmp.setPassword(e.getPassword());
            
            this.service.addUser(e);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "User data updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "User data  not found!!");
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
    public ResponseEntity<Map<String,String>> deleteUser(@PathVariable(name="id")int  id)
    {
        try
        {
            this.service.deleteById(id);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "user  data deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
        }
        catch(Exception e)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Employee data not deleted!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/loginn")
    public ResponseEntity<Map<String,String>> login(@RequestParam("username") String username,@RequestParam("password") String password)
    {
        Optional<User> existingUser=this.service.getUserByName(username);
        Map<String,String> response=new HashMap<String,String>();
        if(existingUser.isPresent())
        {
            if(existingUser.get().getPassword().equals(password))
            {
                
                response.put("status", "success");
                response.put("message", "User authenticated");
                response.put("userId",String.valueOf( existingUser.get().getUserid()) );
                response.put("userRole", existingUser.get().getFirst_name());
                return new ResponseEntity<Map<String,String>>(response,HttpStatus.OK);
            }
            else
            {
                response.put("status", "Failed");
                response.put("message", "User password incorrect");
                return new ResponseEntity<Map<String,String>>(response,HttpStatus.NOT_FOUND);
            }
        }       
        else
        {
            response.put("status", "Failed");
            response.put("message", "User email does not exist");
            return new ResponseEntity<Map<String,String>>(response,HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> loginUser(@RequestBody User userData) {
        User user = service.findByUsername(userData.getUsername());
        Map<String,String> response=new HashMap<String,String>();
        System.out.println("Received a login request for customer: " + userData.getUsername());

        if (user.getPassword().equals(userData.getPassword())) {
        	  System.out.println("User login successful: " + user);
            User senduser=new User();
            
            senduser.setFirst_name(user.getFirst_name());
            senduser.setLast_name(user.getLast_name());
            
            senduser.setUsername(user.getUsername());
            response.put("status", "success");
            response.put("message", "User authenticated");
            return new ResponseEntity<Map<String,String>>(response,HttpStatus.OK);
        } else {
        	System.out.println("Customer login failed for: " + userData.getUsername());
            response.put("status", "Failed");
            response.put("message", "Username does not exist");
            return new ResponseEntity<Map<String,String>>(response,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/search/{username}")
	public ResponseEntity<List<User>> findByusername(String username)
	{
		//postTitle=postTitle.toLowerCase();
		return new ResponseEntity<List<User>>(this.service.findByusername(username), HttpStatus.OK);
	}
    
    @PostMapping("/loginew")
   	public ResponseEntity<?> loginUsern(@RequestBody User userData) {
   		User user = dao.findByUsername(userData.getUsername());

   		if (user.getPassword().equals(userData.getPassword())) {
   			User senduser=new User();
   			senduser.setUserid(user.getUserid());
   			senduser.setFirst_name(user.getFirst_name());
   			senduser.setLast_name(user.getLast_name());
   			
			senduser.setUsername(user.getUsername());
			senduser.setPassword(user.getPassword());
			senduser.setEmail_id(user.getEmail_id());
   			return ResponseEntity.ok(senduser);
   		} else {
   			return (ResponseEntity<?>) ResponseEntity.internalServerError();
   		}

	
}
}

