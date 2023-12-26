import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Booking } from '../../../model/booking';
import { Bus } from '../../../model/bus';
import { Payment } from '../../../model/payment';
import { BookingService } from '../../../service/booking.service';
import { BusService } from '../../../service/bus.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent implements OnInit {
  // payment: Payment = new Payment(0, 0, '', '', '', '', new Date());
  isEditable: boolean = false;
  booking!: Booking;
  busId!: number;
  busDetails: any;
  username: any
  user!:User;
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
  bus!: Bus;

  constructor(
    private bookingservice: BookingService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private busService: BusService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      method: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expYear: ['', Validators.required],
      cvv: ['', Validators.required],
      paidDate: ['', Validators.required],
      bookingId: ['', Validators.required],
    });
    this.activateRoute.params.subscribe(params => {
      this.busId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.busService.getBusById(this.busId).subscribe((busData: { [key: string]: any }) => {
        console.log('busData First --->', busData);
        busData['bookingId'] = this.bookingId;
        this.payment['amount'] = busData['ticket_amount'];
        console.log('busData --->', busData);
        this.paymentForm.patchValue(busData);
        this.busDetails = busData;
        console.log('this.busDetails --->', this.busDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = userString !== null ? JSON.parse(userString) : {};
    });
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(() => {
      const busIdString = sessionStorage.getItem('bus');
      this.busId = busIdString !== null ? JSON.parse(busIdString) : '';
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
      (response) => {
        // Handle any further actions like redirecting or displaying a success message.
        console.log('Payment saved successfully!', response);
        alert('Payment successfully!')
        this.router.navigateByUrl('/showticket');
      },
      (error) => {
        // Handle errors, e.g., display an error message to the user.
        console.error('Error while saving payment:', error);
        alert('Error while saving payment:')

      }
    );
  }

  formatAmount(amount: number): string {
    // Assuming 'busDetails.ticket_amount' is in some numeric format, you can format it here.
    // You can use Angular's currency pipe to format it in rupees format.
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
        .subscribe((data) => console.log(data));
      this.router.navigateByUrl('/showticket');
    }
  }
  // user(user: any) {
  //   throw new Error('Method not implemented.');
  // }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl('/user/login');
    }
  }
}

