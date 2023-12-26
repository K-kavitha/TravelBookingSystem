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
@Table(name="Train")
public class Train {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="trainId")
    private int trainId;
    @Override
	public String toString() {
		return "Train [trainId=" + trainId + ", trainNumber=" + trainNumber + ", trainName=" + trainName + ", capacity="
				+ capacity + ", departure=" + departure + ", arrival=" + arrival + ", source=" + source
				+ ", destination=" + destination + ", ticket_amount=" + ticket_amount + "]";
	}
	@Column(name="trainNumber")
    @NotNull(message = "trainNumber can not be empty")
    
    private String trainNumber;
    @Column(name="trainName")
    @NotNull(message = "trainName can not be empty")
    @Size(max = 20,message = "trainName can't be more than 20 characters")
    @Size(min=2, message="trainName must be more than 5 characters")
    
    private String trainName;
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
    
   // @OneToMany(mappedBy = "Train")
   // private List<Booking> bookings;
    
  //  @ManyToOne
   // @JoinColumn(name = "admin_id")
   // private Admin admin;
    
    public Train()
    {
    	
    }
	public Train(int trainId, @NotNull(message = "trainNumber can not be empty") String trainNumber,
			@NotNull(message = "trainName can not be empty") @Size(max = 20, message = "trainName can't be more than 20 characters") @Size(min = 2, message = "trainName must be more than 5 characters") String trainName,
			@NotNull(message = "capacity can not be empty") int capacity,
			@NotNull(message = "departure can not be empty") LocalDateTime departure,
			@NotNull(message = "arrival can not be empty") LocalDateTime arrival,
			@Size(max = 20, message = "source name can't be more than 20 characters") @Size(min = 2, message = "source name must be more than 5 characters") @NotNull(message = "source can not be empty") String source,
			@Size(max = 20, message = "destination name can't be more than 20 characters") @Size(min = 2, message = "destination name must be more than 5 characters") @NotNull(message = "destination can not be empty") String destination,
			@NotNull(message = "ticket_amount can not be empty") double ticket_amount) {
		super();
		this.trainId = trainId;
		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.capacity = capacity;
		this.departure = departure;
		this.arrival = arrival;
		this.source = source;
		this.destination = destination;
		this.ticket_amount = ticket_amount;
	}
	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public String getTrainNumber() {
		return trainNumber;
	}
	public void setTrainNumber(String trainNumber) {
		this.trainNumber = trainNumber;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
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
    
}
