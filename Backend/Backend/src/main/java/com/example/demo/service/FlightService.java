package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Bus;
import com.example.demo.entity.Flight;

public interface FlightService {
	
	public void addFlight(Flight flight);
	public List<Flight>findALL();
	public void updateFlight(Flight flight);
	public void deleteById(int flightId);
	public Optional<Flight> findFlightById(int id);
	
	
	
}
