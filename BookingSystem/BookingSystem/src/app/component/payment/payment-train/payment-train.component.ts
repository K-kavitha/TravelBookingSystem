import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Booking } from '../../../model/booking';
import { Payment } from '../../../model/payment';
import { Train } from '../../../model/train';
import { BookingService } from '../../../service/booking.service';
import { TrainService } from '../../../service/train.service';

@Component({
  selector: 'app-payment-train',
  templateUrl: './payment-train.component.html',
  styleUrl: './payment-train.component.css'
})
export class PaymentTrainComponent implements OnInit{
  isEditable: boolean = false;
  booking!: Booking;

  trainDetails: any;
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
  train!: Train;
  trainId!: number;

  constructor(
    private allinonetravelbookingservice: BookingService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private trainService: TrainService,
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
      this.trainId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.trainService.getTrainById(this.trainId).subscribe((trainData: { [key: string]: any }) => {
        console.log('trainData First --->', trainData);
        trainData['bookingId'] = this.bookingId;
        trainData['amount'] = trainData['ticket_amount'];
        console.log('trainData --->', trainData);
        this.paymentForm.patchValue(trainData);
        this.trainDetails = trainData;
        console.log('this.trainDetails --->', this.trainDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = userString !== null ? JSON.parse(userString) : {};
    });
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(() => {
      const trainIdString = sessionStorage.getItem('train');
      this.trainId = trainIdString !== null ? JSON.parse(trainIdString) : '';
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
    this.allinonetravelbookingservice.SavePayement(formData).subscribe(
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

    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  }
  onSubmit() {
    console.log(this.payment);
    if (this.isEditable) {
      this.allinonetravelbookingservice
        .updatePayment(this.payment)
        .subscribe(() => this.router.navigateByUrl('/showticket'));
    } else {
      this.allinonetravelbookingservice
        .SavePayement(this.payment)
        .subscribe((data) => console.log(data));
      this.router.navigateByUrl('/showticket');
    }
  }
  user(user: any) {
    throw new Error('Method not implemented.');
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl('/user/login');
    }
  }
}

