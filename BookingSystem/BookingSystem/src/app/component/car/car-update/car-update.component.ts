import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrl: './car-update.component.css'
})
export class CarUpdateComponent {
carForm!: FormGroup<any>;
  carId!: number;
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
  this.activateRoute.params.subscribe((params) => {
    this.carId = +params['id'];
    // Fetch the bus data by ID and populate the form
    this.carService
      .getCarById(this.carId)
      .subscribe((carData: { [key: string]: any }) => {
        this.carForm.patchValue(carData);
      });
  });
}
onSubmit() {
  console.log(this.carForm)
    if (this.carForm.valid) {
      const formData = this.carForm.value;

      this.carService.updateCar(formData).subscribe((response: any) => {
        console.log('Flight updated successfully:', response);

        this.router.navigate(['/flight-list']);
      });
    } else {
      alert('Sorry invalid data to update Flight details');
    }
  }
}


