import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Booking } from '../../../model/booking';
import { Flight } from '../../../model/flight';
import { Payment } from '../../../model/payment';
import { FlightService } from '../../../service/flight.service';
import { BookingService } from '../../../service/booking.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-payment-flight',
  templateUrl: './payment-flight.component.html',
  styleUrl: './payment-flight.component.css'
})
export class PaymentFlightComponent implements OnInit{
  isEditable: boolean = false;
  booking!:Booking;
  user!:User;
  flightDetails: any;
  payment: Payment = {
    amount: 0,
    method: '',
    cardNumber: '',
    expYear: '',
    cvv: '',
    paidDate: new Date("2023-09-16"),
    bookingId: 0,
    payment_id: 0
  };
  paymentForm!: FormGroup;
  bookingId!: number;
  flight!: Flight;
  flightId: number | undefined;

  constructor(
    private bookingservice: BookingService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private flightService: FlightService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      //method: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expYear: ['', Validators.required],
      cvv: ['', Validators.required],
      paidDate: ['', Validators.required],
      bookingId: ['', Validators.required],
    });
    this.activateRoute.params.subscribe((params: { [x: string]: string | number; }) => {
      this.flightId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.flightService.getFlightById(this.flightId).subscribe((flightData: { [key: string]: any }) => {
        console.log('trainData First --->', flightData);
        flightData['bookingId'] = this.bookingId;
        flightData['amount'] = flightData['ticket_amount'];
        console.log('trainData --->', flightData);
        this.paymentForm.patchValue(flightData);
        this.flightDetails = flightData;
        console.log('this.flightDetails --->', this.flightDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = userString !== null ? JSON.parse(userString) : {};
    });
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(() => {
      const flightIdString = sessionStorage.getItem('flight');
      this.flightId = flightIdString !== null ? JSON.parse(flightIdString) : '';
    });
    this.activateRoute.paramMap.subscribe(() => {
      const bookingString = sessionStorage.getItem('booking');
      this.booking = bookingString !== null ? JSON.parse(bookingString) : {} as Booking; // Adjust the type according to your Booking type
    });
    this.checkSessionAndNavigate();
  }
  savePaymentDetails() {
    const formData = this.paymentForm.value;
    formData.booking_id = formData.bookingId;
    formData.method = 'card';
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.paidDate = moment().format('YYYY-MM-DDTHH:mm:ss');
    delete formData.bookingId;
    console.log('Payment Form data submitted:', formData);
    this.bookingservice.SavePayement(formData).subscribe(
      (response: any) => {
        // Handle any further actions like redirecting or displaying a success message.
        console.log('Payment saved successfully!', response);
        alert('Payment successfully!')
        this.router.navigateByUrl('/showticket');
      },
      (error: any) => {
        // Handle errors, e.g., display an error message to the user.
        console.error('Error while saving payment:', error);
        alert('Error while saving payment:')

      }
    );
  }

  formatAmount(amount: number): string {

    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  }
  onSubmit() {
    console.log(this.payment);
    if (this.isEditable) {
      this.bookingservice
        .updatePayment(this.payment)
        .subscribe(() => this.router.navigateByUrl('/showticket'));
    } else {
      this.bookingservice
        .SavePayement(this.payment)
        .subscribe((data: any) => console.log(data));
      this.router.navigateByUrl('/showticket');
    }
  }

  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl('/user/login');
    }
  }

}


