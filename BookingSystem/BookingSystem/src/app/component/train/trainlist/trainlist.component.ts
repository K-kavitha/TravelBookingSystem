import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';
import { Train } from '../../../model/train';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrl: './trainlist.component.css'
})
export class TrainlistComponent implements OnInit {
  train: any;
  user!: User;



  trainDetails: any;

  constructor(
    public bookingservice: BookingService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.searchTrains());
    this.bookingservice.sendTrainDetails(this.trainDetails);
    console.log('Train Details', this.trainDetails);
    this.activateRoute.paramMap.subscribe(() => {
      const userString = sessionStorage.getItem('user');
      this.user = userString !== null ? JSON.parse(userString) : {};
    });
    console.log(this.user);

    this.checkSessionAndNavigate();
  }


  searchTrains() {
    {
      // Handle the case where source or destination is missing.
      this.bookingservice.getAllTrain().subscribe((data) => {
        console.log(data);
        this.train = data;
      });
    }
  }


  navigateToBookTrain(trainId: number) {
    this.bookingservice.trainBooking(this.train);
    this.route.navigate(['/trainlist/train-form/'+trainId]);
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

