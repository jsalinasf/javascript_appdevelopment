class Employee {
  // constructor
  constructor(firstName, lastName, social, jobTitle, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._social = social;
    this._jobTitle = jobTitle;
    this._salary = salary;
    this._active = true;  // default value
  }
  
  // Methods

  fire() {
    this._active = false;
  }

  info() {
    if (this._active) {
      const info = `${this._firstName} ${this._lastName}, ${this._social}, ${this._jobTitle}, $${this._salary} per hour`;
      return info;
    } else {
      const info = 'Employee is not active';
      return info;
    }
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      alert('Salary must be greater than zero');
    }
  }
}