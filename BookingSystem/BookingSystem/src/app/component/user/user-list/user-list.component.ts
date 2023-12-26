import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  user:any;
  isEditable: boolean =false;
  hasSearchName: any;
  searchName: any;

  constructor(private bookingservice:BookingService,
    private activateRoute:ActivatedRoute,
    public router:Router) { }
  ngOnInit(): void
 {
  this.activateRoute.paramMap.subscribe(()=>this.getAllUser());
 }


 getAllUser()
{
  this.hasSearchName = this.activateRoute.snapshot.paramMap.has("username");
     if(this.hasSearchName)
     {
      this.searchName  = this.activateRoute.snapshot.paramMap.get("username");
      console.log(this.searchName)
    this.bookingservice.getUserByUname(this.searchName).subscribe(data=>{
      console.log(data);
      this.user= data;
    });
  }
  else{
  this.bookingservice.getAllUser().subscribe(data=>{
    console.log(data);
    this.user=data;
  });
}
}

addUser():void
{
  this.router.navigateByUrl("/user/signup");
}
updateUser(id:number)
{
this.router.navigateByUrl("/updateUser/"+id);

}
deleteUser(id:number):void{
   console.log(id);
   if(confirm("Do you want to delete ?")){
   this.bookingservice.deleteUser(id).subscribe((data: any)=>{
   console.log(data);
   this.getAllUser();
  })
  };
  }


}

