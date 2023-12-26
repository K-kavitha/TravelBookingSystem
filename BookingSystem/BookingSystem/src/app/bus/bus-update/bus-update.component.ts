import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-bus-update',
  templateUrl: './bus-update.component.html',
  styleUrl: './bus-update.component.css'
})
export class BusUpdateComponent implements OnInit {
  busForm!: FormGroup;
  busId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private busService: BusService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.busForm = this.formBuilder.group({
      busId: ['', Validators.required],
      busNumber: ['', Validators.required],
      busName: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]]
    });

    this.activatedRoute.params.subscribe(params => {
      this.busId = +params['id'];
      this.busService.getBusById(this.busId).subscribe((busData: { [key: string]: any; }) => {
        this.busForm.patchValue(busData);
      });
    });
  }

  onSubmit() {
    console.log(this.busForm)
    if (this.busForm.valid) {
      const formData = this.busForm.value;

      this.busService.updateBus(formData).subscribe((response: any) => {
        console.log('Bus updated successfully:', response);

        this.router.navigate(['/bus-list']);
      });
    } else {
      alert('Sorry invalid data to update bus details')
    }
  }
}

