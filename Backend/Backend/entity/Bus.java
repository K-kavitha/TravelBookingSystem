package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("bus")
public class Bus extends Vehicle {

    public String getBusNumber() {
		return busNumber;
	}

	public void setBusNumber(String busNumber) {
		this.busNumber = busNumber;
	}

	public Bus(String busNumber) {
		super();
		this.busNumber = busNumber;
	}
@Column(name="busNumber")
	private String busNumber;
}