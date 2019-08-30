class Ambulance extends Vehicle {
  
  // constructor
  constructor(color, topSpeed, direction, currentSpeed, engineStarted, sirens=false) {
    super(color, topSpeed, direction, currentSpeed, engineStarted);
    this._sirens = sirens;
  }
  
  // methods
  sirensOn() {
    this._sirens = true;
    return '<span style="color: red; font-weight: bolder;">Sirens On</span>';
  }

  sirensOff() {
    this._sirens = false;
    return '<span style="color: #01B629; font-weight: bolder;">Sirens Off</span>';
  }

}