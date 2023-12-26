import { Component } from '@angular/core';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Observable, switchMap, of } from 'rxjs';
import { Car } from '../../../model/car';

@Component({
  selector: 'app-booking-car',
  templateUrl: './booking-car.component.html',
  styleUrl: './booking-car.component.css'
})
export class BookingCarComponent {
  user!: User;
  isEditable: boolean = false;
  router: any;
  carDetails: any;
  car!: Car;
  carId!: number;
  bookingcar!: FormGroup;
  constructor(
    public bookingservice:BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  getUserData():Observable<User | null> {
    return this.activateRoute.paramMap.pipe(
      switchMap(() => {
        const userData = sessionStorage.getItem('user');
       return of(userData ? JSON.parse(userData) : null);
     })
    );
  }
  ngOnInit(): void {
    this.bookingcar = this.formBuilder.group({
      carId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.carId = +params['id'];
      this.bookingservice
        .getCarById(this.carId)
        .subscribe((carData: { [key: string]: any }) => {
          this.bookingcar.patchValue(carData);
          this.carDetails = carData;
        });
    });

    const user = this.getUserData();

    console.log('car', this.carDetails);
    console.log('carBookingForm', this.bookingcar);
    this.activateRoute.paramMap.subscribe(() => this.bookingcar);
    console.log(this.bookingcar);

    console.log(user);
    //this.checkSessionAndNavigate();
  }
  onSubmit(): void {
    const userid  = this.getUserData();
    const formData = this.bookingcar.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.car = { carId: formData.carId };
    console.log('Form data submitted:', formData);
    this.bookingservice
      .carBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.carDetails.associatedcar.carId) {
          this.route.navigateByUrl(`/paymentformcar/${data.carDetails.associatedcar.carId}/${data.carDetails.lastBookingId.booking_id}`);
          alert('Book suessfull')
        } else {
          alert('Book failed')
        }
      });
  }
  updatecar(carId: number) {
    //this.route.navigateByUrl('/carlist/car-form/' + carId);
  }

  carBooking(): void {
    //this.bookingservice.carBooking(this.formData);
    this.route.navigateByUrl('/paymentformcar/:id/:bookingId');
  }
  // checkSessionAndNavigate() {
  //   if (!this.user) {
  //     this.route.navigateByUrl('/user/login');
  //   }
  // }
  logout() {
    if (sessionStorage.getItem('user')) {
      sessionStorage.clear();
      localStorage.clear();
      alert('Logout Successfully');
      this.route.navigateByUrl('/user/login');
    } else {
      alert('No user loged in');
    }
  }
}


