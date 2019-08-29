
class Vehicle {

  // constructor
  constructor(color, topSpeed, direction = 0, currentSpeed = 0, engineStarted = false) {
    this._color = color;
    this._topSpeed = topSpeed;
    this._direction = direction;
    this._currentSpeed = currentSpeed;    
    this._engineStarted = engineStarted;
    this._incrementSpeed = 40; // km per hour
    this._incrementDirection = 15; // degrees
  }

  // methods
  accelerate() {
    if (this._engineStarted) {
      if ((this._currentSpeed + this._incrementSpeed) > this._topSpeed) {
        this._currentSpeed = this._topSpeed;
        alert('Vehicle has reached top speed');
      } else {
        this._currentSpeed += this._incrementSpeed;
      }
    } else {
      alert('Please turn on Vehicle first');
    }
  }

  break() {
    if (this._engineStarted) {
      if (this._currentSpeed > 0) {
        this._currentSpeed -= this._incrementSpeed;
        if (this._currentSpeed < 0) this._currentSpeed = 0;
      } else {
        alert('The current speed of the vehicle is zero, please gain some speed first before breaking')
      }
    } else {
      alert('Please turn on Vehicle first');
    }
  }

  turnOn() {
    if (!this._engineStarted) {
      this._engineStarted = true;
    } else {
      alert('Vehicle is already turned on');
    }    
  }

  turnOff() {
    if (this._currentSpeed === 0) {
      this._engineStarted = false;
    } else {
      alert('Stop the vehicle before turning it off')
    }
    
  }

  turnLeft() {
    this.direction += this._incrementDirection;
  }

  turnRight() {
    this.direction -= this._incrementDirection;
  }

  set direction(newDirection) {
    if (newDirection >=0 && newDirection < 360) {
      this._direction = newDirection
    } else {
      alert('Please correct direction input')
    }
  }

}