import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent implements OnInit{

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
  // users: User = JSON.parse(sessionStorage.getItem("user"))

  // user:any;


   constructor(public bookingservice:BookingService
     ,
     public route:Router,
     public activateRoute: ActivatedRoute){}

     ngOnInit(): void {
       this.activateRoute.paramMap.
       subscribe(()=>this.getUserByID())
     }
     getUserByID(): void{

      const uid = parseInt(this.activateRoute.snapshot.paramMap.get('userid') ?? '0');


       console.log(uid)
       if(uid>0)
       {
         this.isEditable=true;
         this.bookingservice.getUserByID(uid).subscribe((data: User)=>{
           this.user=data;
           console.log(this.user);
         });
       }
     }
     SaveUsers(){
       if(this.isEditable){
         this.bookingservice.updateUser(this.user).subscribe(data=>{
           alert("Successfully updated "+this.user.username)
          // sessionStorage.clear()
          // localStorage.clear()
           this.route.navigateByUrl("/user/login")});
       }
       else{

       this.bookingservice.saveUser(this.user).subscribe(data =>{
         alert("Successfully Register ")
         this.route.navigateByUrl("/user/login")
       },
       error => alert("enter the user data / change the user name")
         );

     }

   }
   onSubmit() {
     this.route.navigateByUrl("/user/login");

   }

 }
