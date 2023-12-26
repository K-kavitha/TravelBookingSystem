import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {
  admin!: Admin;
  constructor(private activateroute:ActivatedRoute,private route:Router) { }
  ngOnInit(): void
  {
    this.activateroute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")!))
    this.checkSessionAndNavigate();

  }
  logout() {
    if (sessionStorage.getItem("admin")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.route.navigateByUrl("/admin/login")
    }
    else {
      alert("No user loged in")
    }
  }
  checkSessionAndNavigate() {
    if (!this.admin) {
      this.route.navigateByUrl("/admin/login");
    }
  }
}

