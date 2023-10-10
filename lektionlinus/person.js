export default class Person {
  name;
  age;
  city;

  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    console.log("Nu är en person skapad!")
  }

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