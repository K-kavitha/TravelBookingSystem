package com.example.demo.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.example.demo.entity.Booking;

@Entity
@Table(name="Payment")
public class Payment {
    @Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", amount=" + amount + ", method=" + method + ", cardNumber="
				+ cardNumber + ", expYear=" + expYear + ", cvv=" + cvv + ", paidDate=" + paidDate + ", booking="
				+ booking + "]";
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="payment_id")
    private int payment_id;
    @NotNull(message = "amount can not be empty")
    @Column(name="amount")
    
    private BigDecimal amount;
    @NotNull(message = "method can not be empty")
    @Column(name="method")
    
    private String method;
    @NotNull(message = "cardNumber can not be empty")
    @Column(name="cardNumber")
    
  
    
    private String cardNumber;
    @NotNull(message = " expYear can not be empty")
    @Column(name="expYear")
    
    private String expYear;
    @NotNull(message = "cvv name can not be empty")
    @Column(name="cvv")
    
    private String cvv;
    @NotNull(message = "paidDate can not be empty")
    @Column(name="paidDate")
    
    private LocalDate paidDate;
   
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    
    public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getExpYear() {
		return expYear;
	}

	public void setExpYear(String expYear) {
		this.expYear = expYear;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public LocalDate getPaidDate() {
		return paidDate;
	}

	public void setPaidDate(LocalDate paidDate) {
		this.paidDate = paidDate;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	// Getters and setters
    public Payment()
    {
    	
    }

	public Payment(int payment_id, BigDecimal amount, String method,  String cardNumber,
			String expYear, String cvv, LocalDate paidDate) {
		super();
		this.payment_id = payment_id;
		this.amount = amount;
		this.method = method;
		this.cardNumber = cardNumber;
		this.expYear = expYear;
		this.cvv = cvv;
		this.paidDate = paidDate;
	}
    
    
   
}
