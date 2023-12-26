import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../../../service/flight.service';

@Component({
  selector: 'app-flight-update',
  templateUrl: './flight-update.component.html',
  styleUrl: './flight-update.component.css'
})
export class FlightUpdateComponent implements OnInit {
  flightForm!: FormGroup;
  flightId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      flightId: ['', Validators.required],
      airline: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    // Get the busId from the route params
    this.activatedRoute.params.subscribe((params) => {
      this.flightId = +params['id'];
      // Fetch the bus data by ID and populate the form
      this.flightService
        .getFlightById(this.flightId)
        .subscribe((flightData: { [key: string]: any }) => {
          this.flightForm.patchValue(flightData);
        });
    });
  }

  onSubmit() {
    console.log(this.flightForm)
    if (this.flightForm.valid) {
      const formData = this.flightForm.value;

      this.flightService.updateFlight(formData).subscribe((response: any) => {
        console.log('Flight updated successfully:', response);

        this.router.navigate(['/flight-list']);
      });
    } else {
      alert('Sorry invalid data to update Flight details');
    }
  }
}

