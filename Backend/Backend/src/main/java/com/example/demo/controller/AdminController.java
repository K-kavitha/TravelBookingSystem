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

import com.example.demo.dao.AdminDao;
import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminService service;
	@Autowired
	AdminDao dao;
	 private final AdminDao adminRepository;

	    @Autowired
	    public AdminController(AdminDao adminRepository) {
	        this.adminRepository = adminRepository;
	    }
	@GetMapping("/list")
	public ResponseEntity<List<Admin>>findAll()
	{
		return new ResponseEntity<List<Admin>>(this.service.findAll(), HttpStatus.OK);
	}
	
	/*@PostMapping("/login")
    public ResponseEntity<Map<String,String>> saveProduct(@RequestBody Admin a)
    {
        try
        {
            Optional<Admin> existingproduct=this.dao.findById(a.getId());
            if(existingproduct.isEmpty())
            {
                
        
            this.service.saveadmin(a);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Admin data added!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "Admin already  found!!");
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
        
      }*/
	

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Admin adminData) {
        System.out.println("Received a login request for admin: " + adminData.getUsername());

        Admin admin = service.findByUsername(adminData.getUsername());

        if (admin.getPassword().equals(adminData.getPassword())) {
            System.out.println("Admin login successful: " + admin);
//            System.out.println("Admin role: " + admin.getUserRole());

            Admin sendadmin = new Admin();
            sendadmin.setId(admin.getId());
            sendadmin.setUsername(admin.getUsername());
            sendadmin.setUserRole(admin.getUserRole());
            sendadmin.setUsername(admin.getPassword());

            return ResponseEntity.ok(sendadmin);
        } else {
            System.out.println("Admin login failed for: " + adminData.getUsername());
            return (ResponseEntity<?>) ResponseEntity.internalServerError();
        }
    }

	
	 @PostMapping("/addadmin")
		public ResponseEntity<Map<String,String>> singup(@RequestBody Admin a)
		{
			this.service.saveadmin(a);
			Map<String,String> response=new HashMap<String,String>();
			response.put("status", "success");
			response.put("message", "Admin data successfully added!!");
			
			return new ResponseEntity<Map<String,String>>(response,HttpStatus.CREATED);
		}
	@GetMapping("/find/{Id}")
	public ResponseEntity<?> getAdminById(@PathVariable long Id)
	{
		System.out.println("Admin ID " + this.service.findById(Id) + " " + Id);
		if(this.service.findById(Id).isPresent())
		{
			return new ResponseEntity<Admin>(this.service.findById(Id).get(),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Admin Id  not found!",HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateAdmin(@RequestBody Admin a)
    {
        try
        {
            if(this.dao.findById(a.getId()).isPresent())
            {
            	Admin existingAdmin=this.dao.findById(a.getId()).get();
            existingAdmin.setUsername(a.getUsername());
//            existingAdmin.setAdd_vechile_id(a.getAdd_vechile_id());
            existingAdmin.setPassword(a.getPassword());
           

            this.service.updateadmin(a);
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "success");
            response.put("message", "Employee data updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.CREATED);
            }
            else
            {
                Map<String,String> response=new HashMap<String,String>();
                response.put("status", "failed");
                response.put("message", "Admin data  not found!!");
                return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
            }
        }
        catch(Exception e1)
        {
            Map<String,String> response=new HashMap<String,String>();
            response.put("status", "failed");
            response.put("message", "Admin not updated!!");
            return new ResponseEntity<Map<String,String>>(response, HttpStatus.BAD_REQUEST);
        }
    }
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String,String>> deleteById(@PathVariable long id)
	{
		try
		{
			this.service.deleteById(id);
			Map<String,String> response=new HashMap<String,String>();
			response.put("status", "success");
			response.put("message", "Admin data deleted!!");
			return new ResponseEntity<Map<String,String>>(response, HttpStatus.OK);
		}
		catch(Exception e)
		{
			Map<String,String> response=new HashMap<String,String>();
			response.put("status", "failed");
			response.put("message", "Admin data not deleted!!");
			return new ResponseEntity<Map<String,String>>(response, HttpStatus.NOT_FOUND);
		}

}
	
	
}
