import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../service/booking.service';
import { Payment } from '../../../model/payment';

@Component({
  selector: 'app-my-payment',
  templateUrl: './my-payment.component.html',
  styleUrl: './my-payment.component.css'
})
export class MyPaymentComponent implements OnInit{
  // payment:any;
  payments: Payment[] = [];
   paymentForm: any;

   constructor(public bookingservice:BookingService
     ,
     public route:Router,
     public activateRoute: ActivatedRoute){}

   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }


 }

