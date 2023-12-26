package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="Bus")
public class Bus {
    @Override
	public String toString() {
		return "Bus [busId=" + busId + ", busNumber=" + busNumber + ", busName=" + busName + ", capacity=" + capacity
				+ ", departure=" + departure + ", arrival=" + arrival + ", source=" + source + ", destination="
				+ destination + ", ticket_amount=" + ticket_amount + "]";
	}
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="busId")
    private int busId;
    @Column(name="busNumber")
    @NotNull(message = "busNumber can not be empty")
    
    private String busNumber;
    @Column(name="busName")
    @NotNull(message = "busName can not be empty")
    @Size(max = 20,message = "busName can't be more than 20 characters")
    @Size(min=2, message="busName must be more than 5 characters")
    
    private String busName;
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
    public String getBusName() {
		return busName;
	}


	public void setBusName(String busName) {
		this.busName = busName;
	}


	/*public List<Booking> getBookings() {
		return bookings;
	}


	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}*/
	
   
    
    //@OneToMany(mappedBy = "bus")
    //private List<Booking> bookings;
    //@ManyToOne
   // @JoinColumn(name = "id")
   // private Admin admin;
    
   
    
    
	


	/*public Admin getAdmin() {
		return admin;
	}


	public void setAdmin(Admin admin) {
		this.admin = admin;
	}*/


	public Bus(int busId, String busNumber, String busName, int capacity, LocalDateTime departure,
			LocalDateTime arrival, String source, String destination, double ticket_amount) {
		super();
		this.busId = busId;
		this.busNumber = busNumber;
		this.busName = busName;
		this.capacity = capacity;
		this.departure = departure;
		this.arrival = arrival;
		this.source = source;
		this.destination = destination;
		this.ticket_amount = ticket_amount;
	}
	
    
    public Bus()
    {
    	
    }
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getBusId() {
		return busId;
	}
	public void setBusId(int busId) {
		this.busId = busId;
	}
	public String getBusNumber() {
		return busNumber;
	}
	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
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
	public double getTicket_amount() {
		return ticket_amount;
	}
	public void setTicket_amount(double ticket_amount) {
		this.ticket_amount = ticket_amount;
	}
    
    
    
    
}