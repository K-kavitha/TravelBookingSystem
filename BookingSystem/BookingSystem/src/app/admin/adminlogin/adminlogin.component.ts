import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../../model/admin';
import { AdminServiceService } from '../../service/admin-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  admin: Admin = new Admin('', '');
  constructor(
    private adminservice: AdminServiceService,
    private route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  Getlogin(): void {
    this.adminservice.LoginAdmin(this.admin).subscribe(
      (data) => {
        alert("Login Successfully");
        console.log("login response" + JSON.stringify(data));

        sessionStorage.setItem("admin", JSON.stringify(data));

        console.log("Navigating to /admin/home"); // Add this line for debugging
        this.route.navigateByUrl("/admin/home");
      },
      (error) => console.log(JSON.stringify(error))
    );
  }
  onSubmit() {
    this.Getlogin();
  }
}

