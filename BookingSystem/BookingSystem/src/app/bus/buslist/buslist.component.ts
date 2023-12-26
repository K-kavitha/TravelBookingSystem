import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from '../../service/bus.service';
import { User } from '../../model/user';
import { BookingService } from '../../service/booking.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrl: './buslist.component.css'
})
export class BuslistComponent implements OnInit {
  bus: any;
  user!: User;
  busDetails: any;

  constructor(
    public bookingservice: BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.searchBuses());
    this.bookingservice.sendBusDetails(this.busDetails);
    console.log('Bus Details', this.busDetails);
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user') ?? '{}'))
    );
    console.log(this.user);

    this.checkSessionAndNavigate();
  }

  searchBuses() {
    {
      // Handle the case where source or destination is missing.
      this.bookingservice.getAllBus().subscribe((data) => {
        console.log(data);
        this.bus = data;
      });
    }
  }
  updateBus(busId: number) {
    this.route.navigateByUrl('/bookingForm' + busId);
  }

  navigateToBookBus(busId: number) {
    //this.bookingservice.addBooking(this.bus);
    this.route.navigateByUrl('/bookingForm/'+busId);
  }

  logout() {
    if (sessionStorage.getItem('user')) {
      sessionStorage.clear();
      localStorage.clear();
      alert('Logout Successfully');
      this.route.navigateByUrl('/user/login');
    } else {
      alert('No user loged in');
    }
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
}
