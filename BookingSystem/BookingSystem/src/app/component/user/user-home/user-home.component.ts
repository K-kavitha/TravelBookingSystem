import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit{

  //user: any ;

  user!: User;

  showBusContent: boolean = true;
  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    ngOnInit(): void
    {

      this.activateRoute.paramMap.subscribe(() => {
        const userString = sessionStorage.getItem('user');
        this.user = userString !== null ? JSON.parse(userString) : {};
      });
      this.checkSessionAndNavigate();

  if (this.user ) {
    console.log("User email:", this.user.email);
    console.log("User username:", this.user.username);
    console.log("User password:", this.user.password);
    console.log("User first_name:", this.user.first_name);
  } else {
    console.log("Email not available");
  }

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
