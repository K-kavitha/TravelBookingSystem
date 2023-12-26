package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Bus;



public interface BusDao extends JpaRepository<Bus, Integer> {
	List<Bus> findBusBySourceIgnoreCase(String source);
	@Query(value = "SELECT * FROM Bus b WHERE b.source = :source "
			, nativeQuery = true)
	public List<Bus> findBySourceAndDestination(@Param("source")
	String source);


}
