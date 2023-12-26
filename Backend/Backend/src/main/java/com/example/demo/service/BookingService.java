package com.example.demo.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.demo.entity.Booking;
import com.example.demo.entity.Bus;




public interface BookingService {
	public Map<String, Object> addBooking(Booking booking);
	public Map<String, Object> trainBooking(Booking booking);
	public Map<String, Object> flightBooking(Booking booking);
	public Map<String, Object> carBooking(Booking booking);
	public List<Booking>findALL();
	public Optional<Booking> findUserById(int booking_id);
	public void updateUser(Booking booking);
	public void deleteById(int booking_id);
	public Optional<Booking> findByBookingId(int booking_id);
	
}
