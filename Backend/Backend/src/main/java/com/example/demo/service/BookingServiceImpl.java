package com.example.demo.service;

import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.BookingDao;

import com.example.demo.entity.Booking;
import com.example.demo.entity.Bus;
import com.example.demo.entity.Car;
import com.example.demo.entity.Flight;
import com.example.demo.entity.Train;
@Service
public class BookingServiceImpl implements BookingService{
	@Autowired
    BookingDao dao;

	@Override
	public Map<String, Object> addBooking(Booking booking) {
	    Booking savedBooking = dao.save(booking);
	    
	    // Assuming that you have a method in your dao or repository to fetch the last booking ID.
	    // Replace "getLastBookingId()" with the appropriate method call.
	    Booking lastBookingId = savedBooking;

	    // Ensure that the associated Bus entity is fetched along with the saved Booking entity.
	    // Assuming your JPA setup handles this association correctly.
	    Bus associatedBus = savedBooking.getBus();
	    
	    // You can return a custom object that contains both the lastBookingId and associatedBus.
	    // Create a class to hold these values or use a Map as per your design.
	    Map<String, Object> result = new HashMap<>();
	    result.put("lastBookingId", lastBookingId);
	    result.put("associatedBus", associatedBus);
	    
	    return result;
	}
	@Override
	public Map<String, Object> carBooking(Booking booking) {
	    Booking savedBooking = dao.save(booking);

	    // Assuming that you have a method in your dao or repository to fetch the last booking ID.
	    // Replace "getLastBookingId()" with the appropriate method call.
	    Booking lastBookingId = savedBooking;

	    // Ensure that the associated Bus entity is fetched along with the saved Booking entity.
	    // Assuming your JPA setup handles this association correctly.
	    Car associatedCar = savedBooking.getCar();

	    // You can return a custom object that contains both the lastBookingId and associatedBus.
	    // Create a class to hold these values or use a Map as per your design.
	    Map<String, Object> result = new HashMap<>();
	    result.put("lastBookingId", lastBookingId);
	    result.put("associatedCar", associatedCar);

	    return result;
	}
	@Override
	public Map<String, Object> trainBooking(Booking booking) {
		 Booking savedBooking = dao.save(booking);
		    
		    // Assuming that you have a method in your dao or repository to fetch the last booking ID.
		    // Replace "getLastBookingId()" with the appropriate method call.
		    Booking lastBookingId = savedBooking;

		    // Ensure that the associated Bus entity is fetched along with the saved Booking entity.
		    // Assuming your JPA setup handles this association correctly.
		    Train associatedTrain = savedBooking.getTrain();
		    
		    // You can return a custom object that contains both the lastBookingId and associatedBus.
		    // Create a class to hold these values or use a Map as per your design.
		    Map<String, Object> result = new HashMap<>();
		    result.put("lastBookingId", lastBookingId);
		    result.put("associatedTrain", associatedTrain);
		    
		    return result;
	}


	@Override
	public Map<String, Object> flightBooking(Booking booking) {
		 Booking savedBooking = dao.save(booking);
		    
		    // Assuming that you have a method in your dao or repository to fetch the last booking ID.
		    // Replace "getLastBookingId()" with the appropriate method call.
		    Booking lastBookingId = savedBooking;

		    // Ensure that the associated Bus entity is fetched along with the saved Booking entity.
		    // Assuming your JPA setup handles this association correctly.
		    Flight associatedFlight = savedBooking.getFlight();
		    
		    // You can return a custom object that contains both the lastBookingId and associatedBus.
		    // Create a class to hold these values or use a Map as per your design.
		    Map<String, Object> result = new HashMap<>();
		    result.put("lastBookingId", lastBookingId);
		    result.put("associatedFlight", associatedFlight);
		    
		    return result;
	}

	@Override
	public List<Booking> findALL() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Optional<Booking> findUserById(int booking_id) {
		// TODO Auto-generated method stub
		return this.dao.findById(booking_id);
	}

	@Override
	public void updateUser(Booking booking) {
		// TODO Auto-generated method stub
		this.dao.save(booking);
		
	}

	@Override
	public void deleteById(int booking_id) {
		// TODO Auto-generated method stub
		dao.deleteById(booking_id);
		
	}

	@Override
	public Optional<Booking> findByBookingId(int booking_id) {
		// TODO Auto-generated method stub
		return this.dao.findById(booking_id);
	}


	

	/*@Override
	public Booking getBookingById(int booking_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Booking> findBookingByuserid(long userid) {
		// TODO Auto-generated method stub
		return null;
	}*/
	

}
