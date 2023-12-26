import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { BusCreateComponent } from './bus/bus-create/bus-create.component';
import { BusUpdateComponent } from './bus/bus-update/bus-update.component';
import { BuslistComponent } from './bus/buslist/buslist.component';
import { BookingFormComponent } from './component/Booking/booking-form/booking-form.component';
import { BookingComponent } from './booking/booking.component';
import { AddbusComponent } from './bus/addbus/addbus.component';
import { FlightCreateComponent } from './component/flight/flight-create/flight-create.component';
import { FlightUpdateComponent } from './component/flight/flight-update/flight-update.component';
import { TrainCreateComponent } from './component/train/train-create/train-create.component';
import { TrainUpdateComponent } from './component/train/train-update/train-update.component';
import { CustomerComponent } from './component/user/customer/customer.component';
import { AdminbusListComponent } from './component/bus/adminbus-list/adminbus-list.component';
import { AdmintrainListComponent } from './component/train/admintrain-list/admintrain-list.component';
import { FlightListComponent } from './component/flight/flight-list/flight-list.component';
import { AllPaymentsComponent } from './component/payment/all-payments/all-payments.component';
import { BookingFilterComponent } from './component/Booking/booking-filter/booking-filter.component';
import { BookingTrainComponent } from './component/Booking/booking-train/booking-train.component';
import { MyBookingComponent } from './component/Booking/my-booking/my-booking.component';
import { FlightOfferComponent } from './component/flight/flight-offer/flight-offer.component';
import { FlightnewComponent } from './component/flight/flightnew/flightnew.component';
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
import { WelcomeComponent } from './welcome/welcome.component';
import { BookhomeComponent } from './component/Booking/bookhome/bookhome.component';
import { ShowmyTicketsComponent } from './component/Booking/showmy-tickets/showmy-tickets.component';
import { BookingflightComponent } from './component/Booking/bookingflight/bookingflight.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { FlightComponent } from './component/flight/flight/flight.component';
import { BookingCarComponent } from './component/Booking/booking-car/booking-car.component';
import { CarnewComponent } from './component/car/carnew/carnew.component';
import { CarListComponent } from './component/car/car-list/car-list.component';
import { CarCreateComponent } from './component/car/car-create/car-create.component';
import { CarUpdateComponent } from './component/car/car-update/car-update.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'booking/filter', component: BookingFilterComponent },
  { path: 'bookingForm/:id', component: BookingFormComponent },
  { path: 'bookingForm', component: BookingFormComponent },
  { path: 'paymentform/:id/:bookingId', component: PaymentFormComponent },
  { path: 'userHome', component: UserHomeComponent },

  { path: 'bookhome', component: BookhomeComponent },
  { path: 'helpchat', component: HelpChatComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'buslist/:busId', component: BuslistComponent },
  { path: 'flightoffer', component: FlightOfferComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'flightlistnew', component: FlightnewComponent },
  { path: 'myPayment', component: MyPaymentComponent },
  { path: 'myBooking', component: MyBookingComponent },
  {path:'showticket',component:ShowmyTicketsComponent},
  {path:'trainlist',component:TrainlistComponent},
  {path:'trainlist/train-form/:id',component:BookingTrainComponent},
  { path: 'paymentformtrain/:id/:bookingId', component: PaymentTrainComponent },
  { path: 'paymentformcar/:id/:bookingId', component: PaymentTrainComponent },
  {path:'flight-form/:id',component:BookingflightComponent},
  {path:'car-form/:id',component:BookingCarComponent},
  { path: 'paymentformflight/:id/:bookingId', component: PaymentFlightComponent },
  {/*admin*/ path: 'admin/login', component: AdminloginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
{ path: 'bus-create', component: BusCreateComponent },
{ path: 'bus-update/:id', component: BusUpdateComponent },
{ path: 'bus-list', component: BuslistComponent },{ path: 'updatebus', component: BuslistComponent },
 { path: 'bookingForm/:id', component: BookingFormComponent },
//admin
{ path: 'admin/addbus', component: AddbusComponent },
{ path: 'admin/bus-create', component: BusCreateComponent },
{ path: 'bus-update/:id', component: BusUpdateComponent },
{ path: 'admin/bus-list', component: AdminbusListComponent },
{ path: 'train-list', component: AdmintrainListComponent },
{ path: 'car-list', component: CarnewComponent },
{ path: 'train-create', component: TrainCreateComponent },
{ path: 'train-update/:id', component: TrainUpdateComponent },
{ path: 'flight-list', component: FlightListComponent },
{ path: 'admin/car-list', component: CarListComponent },
{ path: 'flight-create', component: FlightCreateComponent },
{ path: 'car-create', component: CarCreateComponent },
{ path: 'flight-update/:id', component: FlightUpdateComponent },
{ path: 'car-update/:id', component: CarUpdateComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'userlist', component: UserListComponent },
{ path: 'booking', component: BookingComponent },
{ path: 'payment', component: AllPaymentsComponent },
{ path: 'about', component: AboutComponent  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
