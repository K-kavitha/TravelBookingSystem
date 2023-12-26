import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrl: './bus-create.component.css'
})
export class BusCreateComponent {
  busForm: FormGroup;
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private busService: BusService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.busForm = this.formBuilder.group({
      busNumber: ['', Validators.required],
      busName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]]
    });
  }
  ngOnInit(): void {

    this.busForm = this.formBuilder.group({
      busNumber: ['', Validators.required],
      busName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(1)]]
    });
  }
  onSubmit() {
    if (this.busForm.valid) {
      const formData = this.busForm.value;
      console.log('Form data submitted:', formData);


      this.busService.createBus(formData).subscribe((response: any) => {

        console.log('Bus created successfully:', response);

        this.router.navigate(['/bus-list']);
      });
    } else {
      alert('Something went wrong')
    }
  }
}
