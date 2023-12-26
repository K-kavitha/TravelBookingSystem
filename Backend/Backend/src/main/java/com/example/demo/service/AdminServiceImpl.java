package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AdminDao;
import com.example.demo.entity.Admin;


@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminDao dao;

	@Override
	public List<Admin> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public void saveadmin(Admin a) {
		// TODO Auto-generated method stub
		dao.save(a);
	}

	

	@Override
	public Optional<Admin> findById(long id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}

	@Override
	public void updateadmin(Admin a) {
		dao.save(a);
		
	}

	@Override
	public void deleteById(long id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
		
	}

	@Override
	public Admin findByUsername(String username) {
		// TODO Auto-generated method stub
		return dao.findAdminByUsername(username);
	}

	

	

}
