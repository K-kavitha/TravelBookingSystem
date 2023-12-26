import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlightService } from '../../../service/flight.service';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrl: './flight-create.component.css'
})
export class FlightCreateComponent {
  flightForm!: FormGroup;
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      flight_id: ['', Validators.required],
      airline: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]],
    });
  }
  ngOnInit(): void {
    this.flightForm = this.formBuilder.group({
      flight_id: ['', Validators.required],
      airline: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]],
    });
  }
  onSubmit() {
    if (this.flightForm.valid) {
      const formData = this.flightForm.value;
      console.log('Form data submitted:', formData);

      this.flightService.createFlight(formData).subscribe((response: any) => {
        console.log('Flight created successfully:', response);

        this.router.navigate(['/flight-list']);
      });
    } else {
      alert('Something went wrong');
    }
  }
}
