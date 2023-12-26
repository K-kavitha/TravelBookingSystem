import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from '../../model/admin';
import { Bus } from '../../model/bus';
import { AdminServiceService } from '../../service/admin-service.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrl: './addbus.component.css'
})
export class AddbusComponent implements OnInit {
  bus: Bus = new Bus(0, "", "", 0, new Date(), new Date(), "", "", 0);
  isEditable: boolean = false;
  admin: Admin | null = null;

  constructor(
    private adminService: AdminServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const busId = parseFloat(paramMap.get("busid")!);
      const adminData = sessionStorage.getItem("admin");

      if (busId > 0) {
        this.isEditable = true;
        this.adminService.getBusById(busId).subscribe((data: Bus) => {
          this.bus = data;
        });
      }

      this.admin = adminData ? JSON.parse(adminData) : null;
      this.checkSessionAndNavigate();
    });
  }

  onSubmit() {
    console.log(this.bus);
    if (this.isEditable) {
      this.adminService.updateBus(this.bus).subscribe((data: any) => {
        console.log(data);
        alert("The Bus is updated");
        this.router.navigateByUrl("/admin/bus");
      });
    } else {
      this.adminService.SaveBus(this.bus).subscribe((data: any) => {
        console.log(data);
        alert("The Bus is Added");
        this.router.navigateByUrl("/admin/bus");
      });
    }
  }

  checkSessionAndNavigate() {
    if (!this.admin) {
      this.router.navigateByUrl("/admin/login");
    }
  }
}


