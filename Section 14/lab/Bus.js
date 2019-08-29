class Bus extends Vehicle {
  
  // constructor
  constructor(color, topSpeed, direction, currentSpeed, engineStarted, seats=20) {
    super(color, topSpeed, direction, currentSpeed, engineStarted)
    this._seats = seats;
  }

  // methods
  get seats() {
    return this._seats;
  }
  set seats(newSeats) {
    if (newSeats > 0) {
      this._seats = newSeats;
    } else {
      alert('Bus seats mut be greater than zero')
    }
  }

}