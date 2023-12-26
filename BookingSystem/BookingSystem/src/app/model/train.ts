export class Train {
  trainId: number;
  trainNumber: string;
  trainName: string;
  capacity: number;
  departure: Date;
  arrival: Date;
  source: string;
  destination: string;
  ticket_amount: number;

  constructor(
    trainId: number,
    trainNumber: string,
    trainName: string,
    capacity: number,
    departure: Date,
    arrival: Date,
    source: string,
    destination: string,
    ticket_amount: number
  ) {
    this.trainId = trainId;
    this.trainNumber = trainNumber;
    this.trainName = trainName;
    this.capacity = capacity;
    this.departure = departure;
    this.arrival = arrival;
    this.source = source;
    this.destination = destination;
    this.ticket_amount = ticket_amount;
  }
}
