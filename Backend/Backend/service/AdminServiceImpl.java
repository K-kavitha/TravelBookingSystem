package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AdminRepository;
import com.example.demo.entity.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminRepository dao;

	@Override
	public List<Admin> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public void saveadmin(Admin a) {
		dao.save(a);
		
	}

	@Override
	public Optional<Admin> findById(int id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public void updateadmin(Admin a) {
		dao.save(a);
		
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
		
	}

	@Override
	public List<Admin> findByusername(String username) {
		// TODO Auto-generated method stub
		return this.dao.findByEnameIgnoreCase(username);
	}

	/* @Override
	public Optional<Admin> getByusername(String username) {
		// TODO Auto-generated method stub
		return this.dao(username);
	}*/

}
