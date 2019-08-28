
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
    }
  }

}