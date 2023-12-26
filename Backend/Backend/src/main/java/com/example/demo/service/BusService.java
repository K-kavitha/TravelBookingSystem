package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Bus;
import com.example.demo.entity.Flight;



public interface BusService {

	public void addBus(Bus bus);
	public List<Bus>findALL();
	public Optional<Bus> findBusById(int id);
	public void updateBus(Bus bus);
	public void deleteById(int busId);
	public List<Bus> findBusesBySourceAndDestination(String source);
	public List<Bus>findByEname(String source);
}
