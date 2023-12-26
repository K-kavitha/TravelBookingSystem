import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-flightnew',
  templateUrl: './flightnew.component.html',
  styleUrl: './flightnew.component.css'
})
export class FlightnewComponent implements OnInit {
  flight: any;
  user!: User;
  flightDetails:any;

  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
  ngOnInit(): void
  {
    this.activateRoute.paramMap.subscribe(() => this.getAllFlight());
    this.bookingservice.sendFlightDetails(this.flightDetails);
    console.log('flight Details', this.flightDetails);
    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = JSON.parse(userString ?? '{}') as User;
    });
    console.log(this.user);

    this.checkSessionAndNavigate();
  }
  getAllFlight()
{

  this.bookingservice.getAllFlight().subscribe(data=>{
    console.log(data);
    this.flight=data;
  });
}
navigateToBookFlight(flightId: number) {
  this.route.navigate(['/flightlist/flight-form/'+flightId]);
}
logout() {
  if (sessionStorage.getItem("train")) {
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
  if (!this.flight) {
    this.route.navigateByUrl("/user/login");
  }
}
}

