import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrl: './car-create.component.css'
})
export class CarCreateComponent implements OnInit {
  carForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){
    this.carForm = this.formBuilder.group({
      CarId: ['', Validators.required],
      carModel: ['', Validators.required],
      carColor: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      departureTime: ['', Validators.required],
      route: ['', Validators.required],
      ticketAmount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      CarId: ['', Validators.required],
      carModel: ['', Validators.required],
      carColor: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      departureTime: ['', Validators.required],
      route: ['', Validators.required],
      ticketAmount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      console.log('Form data submitted:', formData);

      this.carService.createCar(formData).subscribe((response: any) => {
        console.log('Car created successfully:', response);

        this.router.navigate(['/car-list']);
      });
    } else {
      alert('Something went wrong');
    }
  }
}
