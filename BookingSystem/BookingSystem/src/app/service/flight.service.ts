import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flightviewURL = 'http://localhost:8080/flight/view';
  private saveflightURL = 'http://localhost:8080/flight/addflight';
  private updateflightURL = 'http://localhost:8080/flight/update';
  private getflightByIdURL = 'http://localhost:8080/flight/flightid/{id}';
  private deleteflightByIdURL = 'http://localhost:8080/flight/delete/{Id}';
  constructor(private http: HttpClient) {}

  getFlightById(flightId: number): Observable<Flight> {
    const url = this.getflightByIdURL.replace('{id}', flightId.toString());
    return this.http.get<Flight>(url);
  }
  getAllFlight(): Observable<any> {
    return this.http.get(this.flightviewURL);
  }
  createFlight(flight: Flight): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Flight>(this.saveflightURL, flight, httpOptions);
  }
  updateFlight(flight: Flight): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(flight);
    return this.http.put(this.updateflightURL, body, { headers: headers });
  }
  deleteFlightById(flightId: number): Observable<Flight> {
    const url = this.deleteflightByIdURL.replace('{Id}', flightId.toString());
    return this.http.delete<Flight>(url);
  }
}

