package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Payment;
import com.example.demo.entity.User;

public interface PaymentService {
	public void addPay(Payment payment);
	public List<Payment>findALL();
	public Optional<Payment> findUserById(int payment_id);
	public void updatePayment(Payment payment);
	public void deleteById(int payment_id);
	public void savepayment(Payment p);
	
}
