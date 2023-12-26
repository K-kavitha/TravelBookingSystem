import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../../../service/flight.service';
import { AdminNavbarComponent } from '../../../admin-navbar/admin-navbar.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent implements OnInit{

    bus: any;
    user: any;
    flight: any;
    constructor(
      private flightService: FlightService,
      public router: Router,
      private activateRoute: ActivatedRoute,
    ) {}
    ngOnInit(): void {

      const userData = sessionStorage.getItem('admin');

      if (userData) {

        this.user = JSON.parse(userData);
        console.log('User Data:', this.user);
      }
      this.getAllFlight();
    }
    isAdmin(): boolean {
      return this.user ? this.user.userRole === 'admin' : false;
    }
    getAllFlight() {
      this.flightService.getAllFlight().subscribe((data: any) => {
        console.log(data);
        this.flight = data;
      });
    }
    navigateToCreateFlight() {
      this.router.navigate(['/flight-create']);
    }
    navigateToUpdateFlight(flightId: any) {
      this.router.navigate(['/flight-update/'+flightId]);
    }
    deleteFlight(flightId: number) {
      this.flightService.deleteFlightById(flightId).subscribe(
        (response) => {
          console.log('Flight deleted successfully:', response);
          alert('Flight deleted successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting Flight:', error);
        }
      );
    }

  }

