package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Admin;




public interface AdminService {
	
	public List<Admin>findAll();

	
	public void saveadmin(Admin a);
	public Optional<Admin>findById(int id);
	public void updateadmin(Admin a);
	public void deleteById(int id);
	public List<Admin>findByusername(String username);
	//public Optional<Admin> getByusername(String username);
}
