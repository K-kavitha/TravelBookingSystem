package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Booking;


public interface BookingDao extends JpaRepository<Booking, Integer>{

	/*public List<Booking> findBybooking_idd(long booking_id);
	List<Booking> findByUseruserid(int userid);*/
	
}
