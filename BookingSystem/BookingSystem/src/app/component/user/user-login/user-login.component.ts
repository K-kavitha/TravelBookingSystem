import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{

  user: User = new User(
    0,
    "", // first_name
    "", // last_name
    "", // username
    "", // password
    "", // email_id
    "", // phoneNumber
    "", // profileImage
    "", // address
    "", // district
    ""  // state
  );
  isEditable!: boolean;
  userid!:number;
  first_name!: string;
  last_name!: string;
  username!: string;
  password!: string;
  email_id!: string;

 // Store user data in local storage
         // Store user data in local storage

// Retrieve user data from local storage


usersession: User = JSON.parse(sessionStorage.getItem("user") ?? '{}');


  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    const userJSON = sessionStorage.getItem('user');
console.log("login",this.user.email)


}

  //userlogin
  Getlogin(): void {

    this.bookingservice.getuserlogin(this.user).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/userHome")

    },


    error=> alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/user/signup")
  }
  onSubmit() {
    this.route.navigateByUrl("/userHome");

  }

}
