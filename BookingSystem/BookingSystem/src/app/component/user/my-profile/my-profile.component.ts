import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent  implements OnInit{


  username: any
  user!: User;
  isEditable!: boolean;
  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    ngOnInit(): void {
      this.activateRoute.paramMap.subscribe(() => {
        const userString = sessionStorage.getItem('user');
        this.user = userString !== null ? JSON.parse(userString) : {};
      });
      console.log("enter profile 1",this.user)
      this.checkSessionAndNavigate();
    }

    getUserById() {
      const username = this.user.username;
      console.log("enter profile 2",this.username)
      console.log(username);
      if (username != null) {
        this.isEditable = true;
        this.bookingservice.getUserByUname("username").subscribe(data => {
          this.user = data;
          console.log(this.user)
        });
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


