export class Bus {
  busId: number;
  busNumber: string;
  busName: string;
  capacity: number;
  departure: Date;
  arrival: Date;
  source: string;
  destination: string;
  ticket_amount: number;


  constructor(
    busId: number,
    busNumber: string,
    busName: string,
    capacity: number,
    departure: Date,
    arrival: Date,
    source: string,
    destination: string,
    ticket_amount: number,


  ) {
    this.busId = busId;
    this.busNumber = busNumber;
    this.busName = busName;
    this.capacity = capacity;
    this.departure = departure;
    this.arrival = arrival;
    this.source = source;
    this.destination = destination;
    this.ticket_amount = ticket_amount;


  }
}

