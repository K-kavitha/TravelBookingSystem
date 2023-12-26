//import { Booking } from "./booking";

export class Payment {
  payment_id: number;
  amount: number;
  method: string;
  cardNumber: string;
  expYear: string;
  cvv: string;
  paidDate: Date;
  bookingId: number;
 // booking: Booking | null; // Assuming you have a Booking class

  constructor(
    payment_id: number,
    amount: number,
    method: string,
    cardNumber: string,
    expYear: string,
    cvv: string,
    paidDate: Date,
    bookingId: number,
    //booking: Booking
  ) {
    this.payment_id = payment_id;
    this.amount = amount;
    this.method = method;
    this.cardNumber = cardNumber;
    this.expYear = expYear;
    this.cvv = cvv;
    this.paidDate = paidDate;
    this.bookingId = bookingId;
  }
}

