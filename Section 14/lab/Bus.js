class Bus extends Vehicle {
  
  // constructor
  constructor(color, topSpeed, seats=20, direction=0, currentSpeed=0, engineStarted=false) {
    super(color, topSpeed, direction, currentSpeed, engineStarted)
    this._seats = seats;
  }

  // methods

}