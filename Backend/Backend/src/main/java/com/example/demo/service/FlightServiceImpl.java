package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.FlightDao;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Flight;
@Service
public class FlightServiceImpl implements FlightService {
	@Autowired
    FlightDao dao;

	@Override
	public void addFlight(Flight flight) {
		// TODO Auto-generated method stub
		dao.save(flight);
	}

	@Override
	public List<Flight> findALL() {
		// TODO Auto-generated method stub
		return this.dao.findAll();
	}

	@Override
	public Optional<Flight> findFlightById(int Id) {
		// TODO Auto-generated method stub
		return this.dao.findById(Id);
	}

	@Override
	public void updateFlight(Flight flight) {
		// TODO Auto-generated method stub
		this.dao.save(flight);
	}

	@Override
	public void deleteById(int flightId) {
		// TODO Auto-generated method stub
		dao.deleteById(flightId);
	}

	

}
