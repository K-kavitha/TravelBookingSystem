import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-bookhome',
  templateUrl: './bookhome.component.html',
  styleUrl: './bookhome.component.css'
})
export class BookhomeComponent implements OnInit{
  user:any;
  userString:any;
  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem("user")
    this.user=userString;
  });

    console.log(this.user)
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

