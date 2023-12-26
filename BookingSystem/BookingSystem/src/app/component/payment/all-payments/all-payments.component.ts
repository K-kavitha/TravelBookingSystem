import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../../../service/admin-service.service';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrl: './all-payments.component.css'
})
export class AllPaymentsComponent implements OnInit{

  user: any;
  Payment: any;
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
    this.getAllPayment();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllPayment() {
    this.adminService.getAllPAyment().subscribe((data: any) => {
      console.log(data);
      this.Payment = data;
    });
  }
}
