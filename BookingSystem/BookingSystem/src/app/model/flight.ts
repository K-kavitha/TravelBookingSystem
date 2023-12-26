export class Flight {
  flightId: number;
  airline: string;
  capacity: number;
  departure: Date;
  arrival: Date;
  source: string;
  destination: string;
  ticket_amount: number;

  constructor(
    flightId: number,
    airline: string,
    capacity: number,
    departure: Date,
    arrival: Date,
    source: string,
    destination: string,
    ticket_amount: number
  ) {
    this.flightId = flightId;
    this.airline = airline;
    this.capacity = capacity;
    this.departure = departure;
    this.arrival = arrival;
    this.source = source;
    this.destination = destination;
    this.ticket_amount = ticket_amount;
  }
}

