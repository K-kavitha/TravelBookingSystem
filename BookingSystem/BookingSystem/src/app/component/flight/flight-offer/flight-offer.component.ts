import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-flight-offer',
  templateUrl: './flight-offer.component.html',
  styleUrl: './flight-offer.component.css'
})
export class FlightOfferComponent {
  constructor(private bookingservice:BookingService,
    private router:Router,
    private activateRoute:ActivatedRoute) { }
}
