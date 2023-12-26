import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from '../../../service/bus.service';

@Component({
  selector: 'app-adminbus-list',
  templateUrl: './adminbus-list.component.html',
  styleUrl: './adminbus-list.component.css'
})
export class AdminbusListComponent implements OnInit {
  bus: any;
  user: any;
  constructor(
    private busService: BusService,
    public router: Router,
    private activateRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    // Retrieve user data from session storage
    const userData = sessionStorage.getItem('admin');

    if (userData) {
      // Parse the JSON data to get the user object
      this.user = JSON.parse(userData);
      console.log('User Data:', this.user);
    }
    this.getAllBus();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllBus() {
    this.busService.getAllBus().subscribe((data: any) => {
      console.log(data);
      this.bus = data;
    });
  }
  navigateToCreateBus() {
    this.router.navigate(['/bus-create']);
  }
  navigateToUpdateBus(busId: any) {
    this.router.navigate(['/bus-update/'+busId]);
  }
  deleteBus(busId: number) {
    this.busService.deleteBusById(busId).subscribe(
      (response) => {
        console.log('Bus deleted successfully:', response);
        alert('Bus deleted successfully');
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting bus:', error);
      }
    );
  }
}
