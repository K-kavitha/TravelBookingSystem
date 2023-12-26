package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Payment;


public interface PaymentDao extends JpaRepository<Payment, Integer>{
	//public List<Payment> findByuserid(int userid); //Admin
	//List<Payment> findByUseruserid(int userid);
}
