/export default class Person {
name;
age;
city;

constructor(name, age, city) { // this hjälper oss att peka på variabeler om dom finns utanför scopet
  this.name = name;
  this.age = age;
  this.city = city;
  console.log("Nu är en person skapad!")

}
}

const aPerson = new Person("Glenn", 29, "Göteborg")
console.log(aPerson.name);
console.log(aPerson.city);



greeting() {
  console.log(`Hej jag heter ${this.name} och jag är ${this.age} år gammal. Jag bor i ${this.city}.`)
}

changeCity(newCity) {
  this.city = newCity;
}

yearsLeftToPension(pensionAge) {
  let yearsLeft = pensionAge - this.age;
  console.log(`Du har ${yearsLeft} år kvar till pensionen.`)
}
}


let person = new Person("Niklas", 30, "Skurup");

person.changeCity("Stockholm");
person.greeting()

let person2 = new Person("Sofia", 25, "Umeå");

person2.greeting()
person2.yearsLeftToPension(72);


 Exempel miniräknarKlass, js

class Calculator {

  constructor() { // tom costructor ingen argument!  Vi måste ha en contructor i en class,man kan ha flera cunsrtructor
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
    console.log(tal1 / tal2);
  }

}
const calc = new Calculator()

calc.addition(10, 82)
calc.subtraktion(50, 100)
calc.multi(5, 30)
calc.division(30, 5)