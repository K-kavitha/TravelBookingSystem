import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../../../model/booking';
import { Bus } from '../../../model/bus';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-showmy-tickets',
  templateUrl: './showmy-tickets.component.html',
  styleUrl: './showmy-tickets.component.css'
})
export class ShowmyTicketsComponent {
  username: any
  user!: User;
  isEditable: boolean = false;
  bus!: Bus;
  booking!: Booking;
  constructor(public bookingservice: BookingService
    ,
    public route: Router,
    public activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => (this.user = JSON.parse(sessionStorage.getItem("user") ?? '')));
    console.log("enter profile 1", this.user);
    this.activateRoute.paramMap.subscribe(() => (this.bus = JSON.parse(sessionStorage.getItem("bus") ?? '')));
    console.log("enter profile 1", this.bus);
    this.activateRoute.paramMap.subscribe(() => (this.bus = JSON.parse(sessionStorage.getItem('bus') ?? '')));
    this.activateRoute.paramMap.subscribe(() => (this.booking = JSON.parse(sessionStorage.getItem('booking') ?? '')));
    this.checkSessionAndNavigate();
  }
  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.route.navigateByUrl("/user/login")
    }
    else {
      alert("No user loged in")
    }
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl("/user/login");
    }

  }
}


