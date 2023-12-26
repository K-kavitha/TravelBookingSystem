import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight } from '../../../model/flight';
import { User } from '../../../model/user';
import { BookingService } from '../../../service/booking.service';

//import { formatDate } from '@angular/common';
import { Observable, switchMap, of } from 'rxjs';
//import moment from 'moment';
@Component({
  selector: 'app-booking-filter',
  templateUrl: './booking-filter.component.html',
  styleUrl: './booking-filter.component.css'
})
export class BookingFilterComponent implements OnInit {
  filterForm!: FormGroup;
  busService: any;
  bus:any;
  source: string = ''; // Initialize source with an empty string
  destination: string = '';
  constructor(private formBuilder: FormBuilder,
    public bookingservice:BookingService,private router: Router,
    public activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    search() {
        this.router.navigateByUrl("booking/list");

  }
}

