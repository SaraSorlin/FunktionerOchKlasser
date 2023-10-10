export default class card {
  cardbalance;
  pin;


  constructor(cardbalance, pin) {
    this.cardbalance = cardbalance;
    this.pin = pin;
    console.log("Nu är kortet skapat!")
  }

  comparepin() {
    console.log(`Hej jag heter ${this.pin} och jag är ${this.pin} år gammal. Jag bor i ${this.pin}.`)
  }

  getcardbalance(cardbalance) {
    this.city = cardbalance;
  }


}