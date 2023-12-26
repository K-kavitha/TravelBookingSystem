import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../../../model/booking';
import { BookingService } from '../../../service/booking.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.css'
})
export class MyBookingComponent implements OnInit {
  booking:any;
  // booking: Booking = new Booking(
  //   0,             // booking_id
  //   new Date(),    // date (you can provide a specific date if needed)
  //   "",            // status
  //   "",            // source
  //   "",            // destination
  //   new Date(),    // departure (you can provide a specific date if needed)
  //   new Date(),    // arrival (you can provide a specific date if needed)
  //              // userid
  // );

  isEditable: boolean = false;
  user: any;

  constructor(
    public bookingservice: BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute,
    private http: HttpClient // Inject the HttpClient here
  ) {}

  ngOnInit(): void {
    //this.activateRoute.paramMap.subscribe(() => this.getBookingByID());
    this.activateRoute.paramMap.subscribe(() => this.bookingservice.getBookings());

  }

  getBookingByID(): void {
    const bookingId = this.booking.booking_id;

    if (bookingId) {
      const url = `http://localhost:8080/Booking/find/${bookingId}`;

      this.http.get<any>(url).subscribe((data: any) => {
        // Handle the retrieved booking data here
        console.log('Booking Data:', data);

        // Assuming that 'data' contains the booking details, you can assign it to your 'booking' property
        this.booking = data;
      });
    } else {
      console.error('Invalid Booking ID');
    }
  }

  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
}

