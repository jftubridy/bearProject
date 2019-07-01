// export class CoolDate extends Date{
//   constructor(year, month, day){
//     super();
//     this.setFullYear(year);
//     this.setMonth(month);
//     this.setDate(day);
//   }
//
//   getWeekday(){
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let num = days[this.getDay()];
//
//
//     return num;
//   }
// }
//
//




// Y is the year minus 1 for January or February, and the year for any other month
// y is the last 2 digits of Y
// c is the first 2 digits of Y
// d is the day of the month (1 to 31)
// m is the shifted month (March=1,...,February=12)
// w is the day of week (0=Sunday,...,6=Saturday). If w is negative you have to add 7 to it.

// let monthDictionary = ["no", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"]


export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
  if (this.foodLevel > 0) {
    return false;
  } else {
    return true;
  }
}

feed() {
  this.foodLevel = 10;
}
}
