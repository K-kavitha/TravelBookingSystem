import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carViewURL = 'http://localhost:8080/car/view';
  private saveCarURL = 'http://localhost:8080/car/addcar';
  private updateCarURL = 'http://localhost:8080/car/update';
  private getCarByIdURL = 'http://localhost:8080/car/carid/{Id}';
  private deleteCarByIdURL = 'http://localhost:8080/car/delete/{Id}';

  constructor(private http: HttpClient) {}

  getCarById(carId: number): Observable<Car> {
    const url = this.getCarByIdURL.replace('{Id}', carId.toString());
    return this.http.get<Car>(url);
  }

  getAllCars(): Observable<any> {
    return this.http.get(this.carViewURL);
  }

  createCar(car: Car): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Car>(this.saveCarURL, car, httpOptions);
  }

  updateCar(car: Car): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(car);
    return this.http.put(this.updateCarURL, body, { headers: headers });
  }

  deleteCarById(carId: number): Observable<Car> {
    const url = this.deleteCarByIdURL.replace('{Id}', carId.toString());
    return this.http.delete<Car>(url);
  }
}


