package com.example.demo.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="Flight")
public class Flight {
    @Override
	public String toString() {
		return "Flight [flightId=" + flightId + ", airline=" + airline + ", capacity=" + capacity + ", departure="
				+ departure + ", arrival=" + arrival + ", source=" + source + ", destination=" + destination
				+ ", ticket_amount=" + ticket_amount + "]";
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="flightId")
    private int flightId;
  
    @Column(name="airline")
    @NotNull(message = "airline can not be empty")
    @Size(max = 20,message = "airline can't be more than 20 characters")
    @Size(min=2, message="airline must be more than 5 characters")
    
    private String airline;
    @Column(name="capacity")
    @NotNull(message = "capacity can not be empty")
    
    private int capacity;
    @Column(name="departure")
    @NotNull(message = "departure can not be empty")
    
    private LocalDateTime departure;
    @Column(name="arrival")
    @NotNull(message = "arrival can not be empty")
    
    private LocalDateTime arrival;
    @Column(name="source")
    @Size(max = 20,message = "source name can't be more than 20 characters")
    @Size(min=2, message="source name must be more than 5 characters")
    @NotNull(message = "source can not be empty")
    
    private String source;
    @Column(name="destination")
    @Size(max = 20,message = "destination name can't be more than 20 characters")
    @Size(min=2, message="destination name must be more than 5 characters")
    @NotNull(message = "destination can not be empty")
    
    private String destination;
    @Column(name="ticket_amount")
    @NotNull(message = "ticket_amount can not be empty")
    
    private double ticket_amount;
   
	
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public double getTicket_amount() {
		return ticket_amount;
	}
	public void setTicket_amount(double ticket_amount) {
		this.ticket_amount = ticket_amount;
	}
	public Flight(
			@Size(max = 20, message = "destination name can't be more than 20 characters") @Size(min = 2, message = "destination name must be more than 5 characters") @NotNull(message = "destination can not be empty") String destination,
			@NotNull(message = "ticket_amount can not be empty") double ticket_amount) {
		super();
		this.destination = destination;
		this.ticket_amount = ticket_amount;
	}
	public Flight()
    {
    	
    }
	public Flight(int flightId,
			 String airline,
			 int capacity,
			 LocalDateTime departure,
			 LocalDateTime arrival,
			String source) {
		super();
		this.flightId = flightId;
		this.airline = airline;
		this.capacity = capacity;
		this.departure = departure;
		this.arrival = arrival;
		this.source = source;
	}
	public int getFlightId() {
		return flightId;
	}
	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}
	public String getAirline() {
		return airline;
	}
	public void setAirline(String airline) {
		this.airline = airline;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public LocalDateTime getDeparture() {
		return departure;
	}
	public void setDeparture(LocalDateTime departure) {
		this.departure = departure;
	}
	public LocalDateTime getArrival() {
		return arrival;
	}
	public void setArrival(LocalDateTime arrival) {
		this.arrival = arrival;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	
	
    
}