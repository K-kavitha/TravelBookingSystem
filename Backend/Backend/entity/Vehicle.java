package com.example.demo.entity;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Min(value = 1, message = "Capacity must be at least 1")
    @Column(name="capacity")

    private int capacity;
    @NotBlank(message = "Type must not be blank")
    @Pattern(regexp = "bus|train|flight", message = "Type must be 'bus', 'train', or 'flight'")
    @Column(name="type")
    
    private String type;

    @ManyToOne
    @JoinColumn(name = "id")
    private Admin admin;
    public Vehicle()
    {
    	
    }
	public Vehicle(Long id, @Min(value = 1, message = "Capacity must be at least 1") int capacity,
			@NotBlank(message = "Type must not be blank") @Pattern(regexp = "bus|train|flight", message = "Type must be 'bus', 'train', or 'flight'") String type,
			Admin admin) {
		super();
		this.id = id;
		this.capacity = capacity;
		this.type = type;
		this.admin = admin;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
    
}