
class Vehicle {

  // constructor
  constructor(color, direction, currentSpeed, topSpeed, engineStarted = false) {
    this._color = color;
    this._direction = direction;
    this._currentSpeed = currentSpeed;
    this._topSpeed = topSpeed;
    this._engineStarted = engineStarted;
    this._incrementSpeed = 10; // km per hour
  }

  // methods
  accelerate() {
    if (this._engineStarted) {
      if ((this._currentSpeed + increment) >= this._topSpeed) {
        this._currentSpeed = this._topSpeed;
      } else {
        this._currentSpeed += increment;
      }
    } else {
      alert('Please turn on Vehicle first');
    }
  }

  break() {
    if (this._engineStarted) {
      if (this._currentSpeed > 0) {
        this._currentSpeed -= increment;
      } else {
        alert('Current vehicle\'s speed is zero, please gain some speed first before breaking')
      }
    } else {
      alert('Please turn on Vehicle first');
    }
  }

  turnOn() {
    this._engineStarted = true;
  }

  turnOff() {
    this._engineStarted = false;
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