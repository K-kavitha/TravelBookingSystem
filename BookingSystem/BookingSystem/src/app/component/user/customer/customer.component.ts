import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../../../service/admin-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customer : any;
   user: any;
   constructor(
     private adminService: AdminServiceService,
     public router: Router,
     private activateRoute: ActivatedRoute,
   ) {}
   ngOnInit(): void {

     const userData = sessionStorage.getItem('admin');

     if (userData) {

       this.user = JSON.parse(userData);
       console.log('User Data:', this.user);
     }
     this.getAllUser();
   }
   isAdmin(): boolean {
     return this.user ? this.user.userRole === 'admin' : false;
   }
   getAllUser() {
     this.adminService.getAllUser().subscribe((data: any) => {
       console.log(data);
       this.customer = data;
     });
   }

 }
