export class Car {
  carId:number;
  carModel: string;
  carColor: string;
  destination: string;
  arrivalTime: Date;
  departureTime: Date;
  route: string;
  ticketAmount: number;

  constructor(
    carId:number,
    carModel: string,
    carColor: string,
    destination:string,
    arrivalTime: Date,
    departureTime: Date,
    route: string,
    ticketAmount: number
  ) {
    this.carId=carId;
    this.carModel = carModel;
    this.carColor = carColor;
    this.destination=destination;
    this.arrivalTime = arrivalTime;
    this.departureTime = departureTime;
    this.route = route;
    this.ticketAmount = ticketAmount;
  }
}
