class PTEmployee extends Employee {
  
  // constructor
  constructor (firstName, lastName, social, jobTitle, salary, hoursPerWeek) {
    super(firstName, lastName, social, jobTitle, salary);
    this._hoursPerWeek = hoursPerWeek;
  }
  
  // Methods
  info () {
    if (this._active) {
      const info = `${this._firstName} ${this._lastName} ${this._social} ${this._jobTitle} ${this._salary} ${this._hoursPerWeek}`; 
      return info;
    } else {
      const info = `Part Time Employee is not active`
      return info;
    }
  }
}