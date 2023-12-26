import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css'
})
export class FlightListComponent implements OnInit  {
  flight: any;
  user!: User;



  flightDetails: any;

  constructor(
    public bookingservice: BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.getAllFlight());
    this.bookingservice.sendFlightDetails(this.flightDetails);
    console.log('Flight Details', this.flightDetails);
    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = JSON.parse(userString ?? '{}') as User;
    });
    console.log(this.user);

    this.checkSessionAndNavigate();
  }

  getAllFlight() {
    {
      // Handle the case where source or destination is missing.
      this.bookingservice.getAllFlight().subscribe((data) => {
        console.log(data);
        this.flight = data;
      });
    }
  }


  navigateToBookFlight(flightId: number) {
    this.bookingservice.flightBooking(this.flight);
    this.route.navigate(['flight-form/'+flightId]);
  }

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
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
}

