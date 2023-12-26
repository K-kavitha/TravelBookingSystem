import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Observable, switchMap, of } from 'rxjs';
import { Flight } from '../../../model/flight';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';
@Component({
  selector: 'app-bookingflight',
  templateUrl: './bookingflight.component.html',
  styleUrl: './bookingflight.component.css'
})
export class BookingflightComponent implements OnInit{
  user!: User //| null | undefined;
  isEditable: boolean = false;
  //router: any;

  flightDetails: any;
  flight!: Flight;
  flightId!: number;
  bookingFlight!: FormGroup;
  constructor(
    public bookingservice: BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  //  getUserData() {
  //    this.activateRoute.paramMap.subscribe(
  //      () => (this.user = JSON.parse(sessionStorage.getItem('user')))

  //    );
  //   return this.user;
  //  }
   getUserData(): Observable<User | null> {
     return this.activateRoute.paramMap.pipe(
       switchMap(() => {
         const userData = sessionStorage.getItem('user');
        return of(userData ? JSON.parse(userData) : null);
      })
     );
  }
  ngOnInit(): void {
    this.bookingFlight = this.formBuilder.group({
      flightId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.flightId = +params['id'];
      this.bookingservice
        .getFlightById(this.flightId)
        .subscribe((flightData: { [key: string]: any }) => {
          this.bookingFlight.patchValue(flightData);
          this.flightDetails = flightData;
        });
    });

    const user = this.getUserData();

    console.log('flight', this.flightDetails);
    console.log('trainBookingForm', this.bookingFlight);
    this.activateRoute.paramMap.subscribe(() => this.bookingFlight);
    console.log(this.bookingFlight);

    console.log(user);
    //this.checkSessionAndNavigate();
  }
  // getUserID(): Observable<string | null> {
  //   return this.getUserData().pipe(
  //     map(user => user ? user.userid : null)
  //   );
  // }
  onSubmit(): void {
    const  userid  = this.getUserData();
    const formData = this.bookingFlight.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');//
    //const formattedDate = Date() ? formatDate(Date) : '';
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.flight = { flightId: formData.flightId };
    console.log('Form data submitted:', formData);
    this.bookingservice
      .flightBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.flightDetails.associatedFlight.flightId) {
          this.route.navigateByUrl(`/paymentformflight/${data.flightDetails.associatedFlight.flightId}/${data.flightDetails.lastBookingId.booking_id}`);
          alert('Book suessfull')
        } else {
          alert('Book failed')
        }
      });
  }
  updateFlight(flightId: number) {
    this.route.navigateByUrl('/flight-form/' + flightId);
  }

  flightBooking(): void {
     this.route.navigateByUrl('paymentformflight/:id/:bookingId');
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

