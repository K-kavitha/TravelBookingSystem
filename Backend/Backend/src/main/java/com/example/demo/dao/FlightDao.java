package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Flight;

public interface FlightDao  extends JpaRepository<Flight, Integer>{

}
