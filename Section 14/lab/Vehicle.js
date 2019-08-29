
class Vehicle {

  // constructor
  constructor(color, topSpeed, direction=0, currentSpeed=0, engineStarted=false) {
    this._color = color;
    this._topSpeed = topSpeed;
    this._direction = direction;
    this._currentSpeed = currentSpeed;    
    this._engineStarted = engineStarted;
    this._incrementSpeed = 30; // miles per hour
    this._incrementDirection = 45; // degrees
  }

  // methods
  accelerate() {
    if (this._engineStarted) {
      if ((this._currentSpeed + this._incrementSpeed) > this._topSpeed) {
        this._currentSpeed = this._topSpeed;
        return `Speed is: ${this._currentSpeed} MPH <span style="color:red">(Top speed has been reached)</span>`
      } else {
        this._currentSpeed += this._incrementSpeed;
        return `Speed is: ${this._currentSpeed} MPH`
      }
    } else {
      return `<p style="color:red;">Please turn on vehicle first before Accelerating.</p>`
    }
  }

  break() {
    if (this._engineStarted) {
      if (this._currentSpeed > 0) {
        this._currentSpeed -= this._incrementSpeed;
        if (this._currentSpeed <= 0) {
          this._currentSpeed = 0;
          return `Speed is: ${this._currentSpeed} MPH <span style="color:red">(Vehicle has completely stopped)</span> `
        }
        return `Speed is: ${this._currentSpeed} MPH`
      } else {
        return `Speed is: ${this._currentSpeed} MPH <span style="color:blue;">(Vehicle is already stopped, please gain some speed first before breaking)</span>`;
      }
    } else {
      alert('Please turn on Vehicle first');
    }
  }

  turnOn() {
    if (!this._engineStarted) {
      this._engineStarted = true;
      return `Engine Started: ${this._engineStarted}`
    } else {
      return `<span style="color:red;">Vehicle is already turned on</span>`;
    }    
  }

  turnOff() {
    if (this._currentSpeed === 0 && this._engineStarted == true) {
      this._engineStarted = false;
      return `Engine Started: ${this._engineStarted}`
    } else if (this._currentSpeed > 0) {
      return `<span style="color:red;">Please stop Vehicle completely before turning it off</span>`
    } else {
      return `<span style="color:red;">Vehicle is already turned off</span>`;
    }
    
  }

  turnLeft() {
    this.direction = this._direction + this._incrementDirection;
    return `New direction is: ${this._direction} degrees`;
  }

  turnRight() {
    this.direction = this._direction - this._incrementDirection;
    return `New direction is: ${this._direction} degrees`;
  }

  info() {
    const info = `Color: ${this._color} - Current Speed: ${this._currentSpeed}MPH - Top Speed: ${this._topSpeed}MPH - Direction: ${this._direction} - Engine Started: ${this._engineStarted}`;
    return info;
  }

  set direction(newDirection) {
    if (newDirection >=0 && newDirection < 360) {
      this._direction = newDirection
    } else {
      console.log('You can\'t turn any further in this direction');
    }
  }

}