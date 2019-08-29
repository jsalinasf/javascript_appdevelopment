class Bus extends Vehicle {
  
  // constructor
  constructor(color, topSpeed, direction, currentSpeed, engineStarted, seats=20) {
    super(color, topSpeed, direction, currentSpeed, engineStarted)
    this._seats = seats;
  }

  // methods

  // overriding parent class method
  info() {
    const info = `Color: ${this._color} - Current Speed: ${this._currentSpeed}MPH - Top Speed: ${this._topSpeed}MPH - Direction: ${this._direction} - Engine Started: ${this._engineStarted} - Seats: ${this._seats}`;
    return info;
  }
  
  get seats() {
    return this._seats;
  }
  set seats(newSeats) {
    if (newSeats > 0) {
      this._seats = newSeats;
    } else {
      console.log('Bus seats mut be greater than zero')
    }
  }

}