import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { Train } from '../../../model/train';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';
import { switchMap, of, Observable } from 'rxjs';
import { Booking } from '../../../model/booking';

@Component({
  selector: 'app-booking-train',
  templateUrl: './booking-train.component.html',
  styleUrl: './booking-train.component.css'
})
export class BookingTrainComponent implements OnInit {
  user!: User;
  isEditable: boolean = false;
  router: any;
  trainDetails: any;
  train!: Train;
  trainId!: number;
  bookingTrain!: FormGroup;
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
    this.bookingTrain = this.formBuilder.group({
      trainId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.trainId = +params['id'];
      this.bookingservice
        .getTrainById(this.trainId)
        .subscribe((trainData: { [key: string]: any }) => {
          this.bookingTrain.patchValue(trainData);
          this.trainDetails = trainData;
        });
    });

    const user = this.getUserData();

    console.log('train', this.trainDetails);
    console.log('trainBookingForm', this.bookingTrain);
    this.activateRoute.paramMap.subscribe(() => this.bookingTrain);
    console.log(this.bookingTrain);

    console.log(user);
    //this.checkSessionAndNavigate();
  }
  onSubmit(): void {
    const userid  = this.getUserData();
    const formData = this.bookingTrain.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.train = { trainId: formData.trainId };
    console.log('Form data submitted:', formData);
    this.bookingservice
      .trainBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.trainDetails.associatedTrain.trainId) {
          this.route.navigateByUrl(`/paymentformtrain/${data.trainDetails.associatedTrain.trainId}/${data.trainDetails.lastBookingId.booking_id}`);
          alert('Book suessfull')
        } else {
          alert('Book failed')
        }
      });
  }
  updateTrain(trainId: number) {
    //this.route.navigateByUrl('/trainlist/train-form/' + trainId);
  }

  trainBooking(): void {
    //this.bookingservice.trainBooking(this.formData);
    this.route.navigateByUrl('/paymentformtrain/:id/:bookingId');
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
