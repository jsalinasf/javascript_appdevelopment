
class Vehicle {

  // constructor
  constructor(color, direction, currentSpeed, topSpeed, engineStarted = false) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = engineStarted;    
  }

  // methods
  accelerate() {
    if (this._engineStarted) {
      let increment = 10; // km/h
      if ((this._currentSpeed + increment) >= this._topSpeed) {
        this._currentSpeed = this._topSpeed;
      } else {
        this._currentSpeed += increment;
      }
    } else {
      alert('Please Turn On Vehicle');
    }
  }

  break() {

  }

  turnOn() {

  }

  turnOff() {

  }

  turnLeft() {

  }

  turnRight() {

  }

  set direction(newDirection) {
    if (newDirection >=0 && newDirection < 360) {
      this._direction = newDirection
    } else {
      alert('Please correct direction input')
    }
  }

}