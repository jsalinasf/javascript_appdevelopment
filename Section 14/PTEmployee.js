class PTEmployee extends Employee {
  // constructor
  constructor (firstName, lastName, social, jobTitle, salary, hoursPerWeek) {
    super(firstName, lastName, social, jobTitle, salary);
    this._hoursPerWeek = hoursPerWeek;
  }
}