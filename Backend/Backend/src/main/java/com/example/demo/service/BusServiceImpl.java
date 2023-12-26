package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.BusDao;

import com.example.demo.entity.Bus;
import com.example.demo.entity.User;

@Service
public class BusServiceImpl implements BusService {
	 @Autowired
	    BusDao dao;

	@Override
	public void addBus(Bus bus) {
		// TODO Auto-generated method stub
		dao.save(bus);
		
		
	}

	@Override
	public List<Bus> findALL() {
		// TODO Auto-generated method stub
		return this.dao.findAll();
	}

	

	@Override
	public void updateBus(Bus bus) {
		// TODO Auto-generated method stub
		this.dao.save(bus);
	}

	@Override
	public void deleteById(int busId) {
		// TODO Auto-generated method stub
		dao.deleteById(busId);
	}

	@Override
	public List<Bus> findBusesBySourceAndDestination(String source) {
		// TODO Auto-generated method stub
		return dao.findBySourceAndDestination(source);
		
	}
	@Override
	public List<Bus> findByEname(String source) {
		// TODO Auto-generated method stub
		return this.dao.findBusBySourceIgnoreCase(source);
	}

	@Override
	public Optional<Bus> findBusById(int Id) {
		// TODO Auto-generated method stub
		return this.dao.findById(Id);
	}


	



}
