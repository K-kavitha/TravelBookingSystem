package com.example.demo.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;


import com.example.demo.dao.PaymentDao;

import com.example.demo.entity.Payment;

@Service
public class PaymentServiceImpl implements PaymentService {
	 @Autowired
	    PaymentDao dao;

	@Override
	public void addPay(Payment payment) {
		// TODO Auto-generated method stub
		this.dao.save(payment);
		
	}

	@Override
	public List<Payment> findALL() {
		// TODO Auto-generated method stub
		 return this.dao.findAll();
	}

	@Override
	public Optional<Payment> findUserById(int payment_id) {
		// TODO Auto-generated method stub
		 return this.dao.findById(payment_id);
	}

	@Override
	public void updatePayment(Payment payment) {
		// TODO Auto-generated method stub
		this.dao.save(payment);
		
	}

	
	public void deleteById(int payment_id) {
		// TODO Auto-generated method stub
		dao.deleteById(payment_id);
	}

	public Payment addPayment(Payment payment, int userid, int booking_id) {
	
		//payment.setBooking(booking_id);
		//payment.setCardNumber();(order.getTotalPrice());
		//payment.setPaidDate(LocalDate.now());
		//payment.setPaidAmount(order.getTotalPrice());
		//if (payment.getTotalPrice() == payment.getPaidAmount()) {
			//order.setStatus("Paid");
		//} else {

			CrudRepository<Payment, Integer> paymentRepository = null;
		//order.setStatus("Not Paid");
		//}
		//Customer customer = customerService.findUserById(customerId).orElse(null);
		//payment.setCustomer(customer);
    	return paymentRepository.save(payment);
	}

	@Override
	public void savepayment(Payment p) {
		// TODO Auto-generated method stub
		dao.save(p);
	}

	
}
