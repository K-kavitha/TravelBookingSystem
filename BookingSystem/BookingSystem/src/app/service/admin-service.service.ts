import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { Bus } from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private adminlistURL = 'http://localhost:8080/admin/viewUser';
  private loginURL = 'http://localhost:8080/admin/login';
  private addbusURL = 'http://localhost:8080/Bus/addbus';
  private updatebusURL = 'http://localhost:8080/bus/update';
  private bussaveURl = 'http://localhost:8080/bus/busId';
  private userURL="http://localhost:8080/user/viewUser";
  private bookingURL="http://localhost:8080/booking/view";
  private paymentURL="http://localhost:8080/Payment/view";
  constructor(private http: HttpClient) { }
  getAllAdmin(): Observable<any> {
    return this.http.get(this.adminlistURL); //return list
  }
  //admin login

  LoginAdmin(admin: Admin): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    //return this.http.post<Admin>(this.loginURL, admin, httpOptions);
    return this.http.post<Admin>(`${this.loginURL}`, admin);
  }
  SaveBus(bus: Bus): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Bus>(this.addbusURL, bus, httpOptions);
  }

  //Update Bus
  updateBus(bus: Bus): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Bus);
    return this.http.put(this.updatebusURL, body, { headers: headers });
  }

  //GetBusById
  getBusById(uid: number): Observable<Bus> {
    const uidUrl = this.bussaveURl + '/' + uid;
    return this.http.get<Bus>(uidUrl);
  }

  //show customer

  getAllUser():Observable<any>
  {
   return this.http.get(this.userURL);
  }

  //show booking

  getAllBooking():Observable<any>
  {
   return this.http.get(this.bookingURL);
  }

 // show payment

  getAllPAyment():Observable<any>
  {
   return this.http.get(this.paymentURL);
  }
}

