import { Component } from '@angular/core';
import { Car } from '../../../model/car';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Booking } from '../../../model/booking';
import { Payment } from '../../../model/payment';
import { BookingService } from '../../../service/booking.service';
import { CarService } from '../../../service/car.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-payment-car',
  templateUrl: './payment-car.component.html',
  styleUrl: './payment-car.component.css'
})
export class PaymentCarComponent {
  isEditable: boolean = false;
  booking!:Booking;
  user!:User;
  carDetails: any;
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
  car!: Car;
  carId: number | undefined;

  constructor(
    private bookingservice: BookingService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private carService: CarService,
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
      this.carId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.carService.getCarById(this.carId).subscribe((carData: { [key: string]: any }) => {
        console.log('carData First --->', carData);
        carData['bookingId'] = this.bookingId;
        carData['amount'] = carData['ticket_amount'];
        console.log('carData --->', carData);
        this.paymentForm.patchValue(carData);
        this.carDetails = carData;
        console.log('this.carDetails --->', this.carDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = userString !== null ? JSON.parse(userString) : {};
    });
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(() => {
      const carIdString = sessionStorage.getItem('car');
      this.carId = carIdString !== null ? JSON.parse(carIdString) : '';
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



