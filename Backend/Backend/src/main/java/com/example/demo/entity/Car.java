package com.example.demo.entity;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "CarId")
    private int carId;

    @NotNull(message = "Car model is required")
    @Size(min = 2, max = 50, message = "Car model must be between 2 and 50 characters")
    @Column(name = "Car_Model")
    private String carModel;

    @NotBlank(message = "Car color is required")
    @Size(min = 2, max = 20, message = "Car color must be between 2 and 20 characters")
    @Column(name = "Car_Color")
    private String carColor;

    @NotNull(message = "Arrival time is required")
    @Future(message = "Arrival time must be in the future")
    @Column(name = "Arrival_Time")
    private LocalTime arrivalTime;

    @NotNull(message = "Departure time is required")
    @Column(name = "Departure_Time")
    private LocalTime departureTime;

    @NotBlank(message = "Route is required")
    @Size(min = 2, max = 100, message = "Route must be between 2 and 100 characters")
    @Column(name = "Route")
    private String route;

    @DecimalMin(value = "0.0", message = "Ticket amount must be greater than or equal to 0.0")
    @Digits(integer = 5, fraction = 2, message = "Ticket amount must have up to 5 digits in total, with 2 decimal places")
    @Column(name = "Ticket_Amount")
    private double ticketAmount;

    public Car() {
    }

    public Car(int carId,String carModel, String carColor, LocalTime arrivalTime, LocalTime departureTime, String route, double ticketAmount) {
        this.carId=carId;
    	this.carModel = carModel;
        this.carColor = carColor;
        this.arrivalTime = arrivalTime;
        this.departureTime = departureTime;
        this.route = route;
        this.ticketAmount = ticketAmount;
    }
    public int getcarId() {
    	return carId;
    }
    public void setcarId(int carId) {
        this.carId = carId;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public String getCarColor() {
        return carColor;
    }

    public void setCarColor(String carColor) {
        this.carColor = carColor;
    }

    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    public String getRoute() {
        return route;
    }

    public void setRoute(String route) {
        this.route = route;
    }

    public double getTicketAmount() {
        return ticketAmount;
    }

    public void setTicketAmount(double ticketAmount) {
        this.ticketAmount = ticketAmount;
    }


    @Override
    public String toString() {
        return "Car{" +
                "carId=" + carId +
                ", carModel='" + carModel + '\'' +
                ", carColor='" + carColor + '\'' +
                ", arrivalTime=" + arrivalTime +
                ", departureTime=" + departureTime +
                ", route='" + route + '\'' +
                ", ticketAmount=" + ticketAmount +
                '}';
    }
}
