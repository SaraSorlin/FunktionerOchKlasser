export default class Calculator {

  constructor() {
  }

  addition(tal1, tal2) {
    console.log(tal1 + tal2);
  }

  subtraktion(tal1, tal2) {
    console.log(tal1 - tal2);
  }

  multi(tal1, tal2) {
    console.log(tal1 * tal2);
  }

  division(tal1, tal2) {
    return tal1 / tal2
  }
}


const calc = new Calculator()

calc.addition(10, 82)
calc.subtraktion(50, 100)
calc.multi(5, 30)

let myNumber = calc.division(30, 5)
console.log(myNumber)