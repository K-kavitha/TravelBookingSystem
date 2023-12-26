import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Booking } from '../model/booking';
import { Bus } from '../model/bus';
import { Flight } from '../model/flight';
import { Train } from '../model/train';
import { User } from '../model/user';
import { Payment } from '../model/payment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  apiUrl: any;

  getuserbyid(uid: number) {
    throw new Error('Method not implemented.');
  }
  //usersignup
  private newusersignUpURL = 'http://localhost:8080/user/signup';
  //userlogin
  private loginuserurl = 'http://localhost:8080/user/loginew';
  private viewuserurl = 'http://localhost:8080/user/viewUser';
  private viewuserByidurl = 'http://localhost:8080/user/find';
  private deleteByUrl='http://localhost:8080/user/{id}';

  //buslist
  private busviewURL = 'http://localhost:8080/bus/list';
  private getbusByIdURL = 'http://localhost:8080/bus/find/{Id}';

  //booking
  private BookFormUrl = 'http://localhost:8080/booking/bookTrip';
  private BookFormUrl1 = 'http://localhost:8080/booking/bookTriptrain';
  private BookFormUrl2 = 'http://localhost:8080/booking/bookTripflight';
  private BookFormUrl3='http://localhost:8080/booking/bookTripcar';

  //payment
  private PaymentFormUrl = 'http://localhost:8080/Payment/pay';
  private PaymentUpdateUrl = 'http://localhost:8080/booking/update';
  private PaymentById='http://localhost:8080/Payment/find/{id}';
  //filter Bus
  private BusFilterUrl = 'http://localhost:8080/booking/findBuses';

  //train list
  private trainviewURL = 'http://localhost:8080/Train/viewtrain';
  private gettrainByIdURL='http://localhost:8080/Train/train_id/{Id}';

  //flight list
  private flightviewURL = 'http://localhost:8080/flight/view';
  private getflightByIdURL='http://localhost:8080/flight/flightid/{Id}';
  //car list
  private carviewURL='http://localhost:8080/car/view';
  private getCartByIdURL='http://localhost:8080/car/carid/';

  // private addbookingurl ="http://localhost:8080/Booking/orders/create";

  //updatebus to booking
  private updatebusTobooking = 'http://localhost:8080/bus/update';
  private updatecarTobooking = 'http://localhost:8080/car/update';
  //get-userByid
  private viewUserById = 'http://localhost:8080/user/find';
  private viewUserByuserName = 'http://localhost:8080/user/username';
  //mybooking
  private mybookingurl="http://localhost:8080/booking/find";
  private baseUrl = 'http://localhost:8080/booking';


  constructor(private http: HttpClient) {}
  //GetUserById
  getUserByID(userid: number): Observable<User> {
    const uidUrl = this.viewUserById + '/' + userid;
    return this.http.get<User>(uidUrl);
  }
  //mybooking
  getBookingByID(booking_id: number): Observable<Booking> {
    const uidUrl = this.mybookingurl + '/' + booking_id;
    return this.http.get<Booking>(uidUrl);
  }
  //Get User by username
  getUserByUname(username: String): Observable<User> {
    const usernameUrl = this.viewUserByuserName + '/' + username;
    return this.http.get<User>(usernameUrl);
  }
  getAllUser():Observable<User>{
    return this.http.get<User>(this.viewuserurl);
  }
  //Login-User
  getuserlogin(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.loginuserurl}`, user);
  }
  //delete user
  deleteUser(userId: number): Observable<User> {
    const url = this.deleteByUrl.replace('{id}', userId.toString());
    return this.http.delete<User>(url);
  }
  //SignUP-User
  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<User>(this.newusersignUpURL, user, httpOptions);
  }
  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.put<User>(
      this.viewuserurl + `/${user}`,
      user,
      httpOptions
    );
  }

  //filter
  filterBusesBySourceAndDestination(source: string): Observable<Bus> {
    // const searchURL =this.BusFilterUrl+"/"+source;
    const searchURL =
      'http://localhost:8080/bus/search/findBusBySourceIgnoreCase?source' +
      source;
    return this.http.get<Bus>(searchURL);
  }
  //buslist
  getAllBus(): Observable<any> {
    return this.http.get(this.busviewURL);
  }
  //bookingform
  getBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/view`);
  }
  addBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    return this.http.post<Booking>(this.BookFormUrl, booking, httpOptions);
  }
  trainBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Booking>(this.BookFormUrl1, booking, httpOptions);
  }
  flightBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Booking>(this.BookFormUrl2, booking, httpOptions);
  }
  carBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Booking>(this.BookFormUrl3, booking, httpOptions);
  }
  //Payment form with signup

  SavePayement(payment: Payment): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    console.log('paymentData==', payment)
    return this.http.post<Payment>(this.PaymentFormUrl, payment, httpOptions);
  }

  updatePayment(payment: Payment): Observable<Payment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.put<Payment>(
      this.PaymentUpdateUrl + `/${payment}`,
      payment,
      httpOptions
    );
  }
  //train list
  getAllTrain(): Observable<any> {
    return this.http.get(this.trainviewURL);
  }
  //car list
  getAllCar(): Observable<any> {
    return this.http.get(this.carviewURL);
  }
  //flight list
  getAllFlight(): Observable<any> {
    return this.http.get(this.flightviewURL);
  }
  //help-chatt
  getChatResponse(question: string): string {
    // Here, you can implement logic to generate responses based on input questions
    // For this example, we'll provide some predefined responses
    switch (question.toLowerCase()) {
      case 'what is your name?':
        return 'My name is TravelBot.';
      case 'where are you from?':
        return 'I am from the TravelBot headquarters.';
      case 'how can I help you?':
        return 'You can ask me about booking flights, Bus, and more.';
      case 'I have a booking issue.':
        return 'If you have a booking issue, please provide your booking details, and we will assist you promptly.';
      case 'I need assistance with payment.':
        return 'If you need assistance with payment, please ensure your payment information is correct, and try again. If the issue persists, contact our support team for further assistance.';

      default:
        return 'I am not sure how to respond to that question.';
    }
  }

  //updatebus to booking
  updateBus(bus: Bus): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(bus);
    return this.http.put(this.updatebusTobooking, body, { headers: headers });
  }
  updateCar(bus: Bus): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(bus);
    return this.http.put(this.updatecarTobooking, body, { headers: headers });
  }
  //share
  private busDetailsSubject = new Subject<Bus>();

  sendBusDetails(bus: Bus) {
    this.busDetailsSubject.next(bus);
    console.log(this.busDetailsSubject);
  }
  //sare car
  private carDetailsSubject = new Subject<Car>();

  sendCarDetails(car: Car) {
    this.carDetailsSubject.next(car);
    console.log(this.carDetailsSubject);
  }
  getCarDetails(): Observable<any> {
    return this.carDetailsSubject.asObservable();
    console.log(this.carDetailsSubject);
  }
  getCarById(carId: number): Observable<Car> {
    const url = this.getCartByIdURL+carId;//.replace('{id}', carId.toString());
    console.log(`getCartById-URL : ${url}`);
    return this.http.get<Car>(url);
  }


//share train
 //share
 private TrainDetailsSubject = new Subject<Train>();

 sendTrainDetails(train: Train) {
   this.TrainDetailsSubject.next(train);
   console.log(this.TrainDetailsSubject);
 }
 getTrainDetails(): Observable<any> {
  return this.TrainDetailsSubject.asObservable();
  console.log(this.TrainDetailsSubject);
}
//share flight
 //share
 private FlightDetailsSubject = new Subject<Flight>();

 sendFlightDetails(flight: Flight) {
   this.FlightDetailsSubject.next(flight);
   console.log(this.FlightDetailsSubject);
 }
 getFlightDetails(): Observable<any> {
  return this.FlightDetailsSubject.asObservable();
  console.log(this.FlightDetailsSubject);
}

getFlightById(flightId: number): Observable<Flight> {
  const url = this.getflightByIdURL.replace('{Id}', flightId.toString());
  console.log(`getflightById-URL : ${url}`);
  return this.http.get<Flight>(url);
}
//----------------
  getBusDetails(): Observable<any> {
    return this.busDetailsSubject.asObservable();
    console.log(this.busDetailsSubject);
  }

  getBusById(busId: number): Observable<Bus> {
    const url = this.getbusByIdURL.replace('{Id}', busId.toString());
    console.log(`getBusById-URL : ${url}`);
    return this.http.get<Bus>(url);
  }

  //train get train id
  getTrainById(trainId: number): Observable<Train> {
    const url = this.gettrainByIdURL.replace('{Id}', trainId.toString());
    console.log(`getTrainById-URL : ${url}`);
    return this.http.get<Train>(url);
  }
  //current user
  private currentUser: any; // You can define a user model with appropriate fields

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
