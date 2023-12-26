import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  user: any;
  cars: any;
  car: any;

  constructor(
    private carService: CarService,
    public router: Router,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const userData = sessionStorage.getItem('admin');

    if (userData) {
      this.user = JSON.parse(userData);
      console.log('User Data:', this.user);
    }

    this.getAllCars();
  }

  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }

  getAllCars() {
    this.carService.getAllCars().subscribe((data: any) => {
      console.log(data);
      this.cars = data;
    });
  }

  navigateToCreateCar() {
    this.router.navigate(['/car-create']);
  }

  navigateToUpdateCar(carId: any) {
    this.router.navigate(['/car-update/' + carId]);
  }

  deleteCar(carId: number) {
    this.carService.deleteCarById(carId).subscribe(
      (response) => {
        console.log('Car deleted successfully:', response);
        alert('Car deleted successfully');
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting Car:', error);
      }
    );
  }
}
