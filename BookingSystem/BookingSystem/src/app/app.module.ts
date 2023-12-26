import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { BookingComponent } from './booking/booking.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BuslistComponent } from './bus/buslist/buslist.component';
import { BusUpdateComponent } from './bus/bus-update/bus-update.component';
import { AddbusComponent } from './bus/addbus/addbus.component';
import { BookingflightComponent } from './component/Booking/bookingflight/bookingflight.component';
import { BookingTrainComponent } from './component/Booking/booking-train/booking-train.component';
import { MyBookingComponent } from './component/Booking/my-booking/my-booking.component';
import { ShowmyTicketsComponent } from './component/Booking/showmy-tickets/showmy-tickets.component';
import { BookhomeComponent } from './component/Booking/bookhome/bookhome.component';
import { BookingFormComponent } from './component/Booking/booking-form/booking-form.component';
import { BookingFilterComponent } from './component/Booking/booking-filter/booking-filter.component';
import moment from 'moment';
import { FlightnewComponent } from './component/flight/flightnew/flightnew.component';
import { FlightListComponent } from './component/flight/flight-list/flight-list.component';
import { FlightOfferComponent } from './component/flight/flight-offer/flight-offer.component';
import { MyPaymentComponent } from './component/payment/my-payment/my-payment.component';
import { PaymentFlightComponent } from './component/payment/payment-flight/payment-flight.component';
import { PaymentFormComponent } from './component/payment/payment-form/payment-form.component';
import { PaymentTrainComponent } from './component/payment/payment-train/payment-train.component';
import { TrainlistComponent } from './component/train/trainlist/trainlist.component';
import { HelpChatComponent } from './component/user/help-chat/help-chat.component';
import { MyProfileComponent } from './component/user/my-profile/my-profile.component';
import { UserHomeComponent } from './component/user/user-home/user-home.component';
import { UserLoginComponent } from './component/user/user-login/user-login.component';
import { UserSignupComponent } from './component/user/user-signup/user-signup.component';
import { CustomerComponent } from './component/user/customer/customer.component';
import { FlightCreateComponent } from './component/flight/flight-create/flight-create.component';
import { FlightComponent } from './component/flight/flight/flight.component';
import { DatePipe } from '@angular/common';
import { FlightUpdateComponent } from './component/flight/flight-update/flight-update.component';
import { AllPaymentsComponent } from './component/payment/all-payments/all-payments.component';
import { UserSearchComponent } from './component/user/user-search/user-search.component';
import { TrainCreateComponent } from './component/train/train-create/train-create.component';
import { TrainUpdateComponent } from './component/train/train-update/train-update.component';
import { AdmintrainListComponent } from './component/train/admintrain-list/admintrain-list.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminbusListComponent } from './component/bus/adminbus-list/adminbus-list.component';
import { CarListComponent } from './component/car/car-list/car-list.component';
import { CarCreateComponent } from './component/car/car-create/car-create.component';
import { CarOfferComponent } from './component/car/car-offer/car-offer.component';
import { CarnewComponent } from './component/car/carnew/carnew.component';
import { CarUpdateComponent } from './component/car/car-update/car-update.component';
import { BookingCarComponent } from './component/Booking/booking-car/booking-car.component';
import { PaymentCarComponent } from './component/payment/payment-car/payment-car.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    BookingComponent,
    BusCreateComponent,
    BuslistComponent,
    BusUpdateComponent,
    AddbusComponent,
    BookingflightComponent,
    BookingTrainComponent,
    MyBookingComponent,
    ShowmyTicketsComponent,
    BookhomeComponent,
    BookingFormComponent,
    BookingFilterComponent,
    FlightnewComponent,
    FlightListComponent,
    FlightOfferComponent,
    MyPaymentComponent,
    PaymentFlightComponent,
    PaymentFormComponent,
    PaymentTrainComponent,
    TrainlistComponent,
    HelpChatComponent,
    MyProfileComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserSignupComponent,
    CustomerComponent,
    FlightCreateComponent,
    FlightComponent,
    FlightUpdateComponent,
    AllPaymentsComponent,
    UserSearchComponent,
    TrainCreateComponent,
    TrainUpdateComponent,
    AdmintrainListComponent,
    UserListComponent,
    WelcomeComponent,
    AdminbusListComponent,
    CarListComponent,
    CarCreateComponent,
    CarOfferComponent,
    CarnewComponent,
    CarUpdateComponent,
    BookingCarComponent,
    PaymentCarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
