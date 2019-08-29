class Ambulance extends Vehicle {
  
  // constructor
  constructor(color, topSpeed, direction, currentSpeed, engineStarted, sirens=false) {
    super(color, topSpeed, direction, currentSpeed, engineStarted);
    this._sirens = sirens;
  }
  
  // methods
  sirensOn() {
    this._sirens = true;
  }

  sirensOff() {
    this._sirens = false;
  }

}