import p from "./person.js"
import calculator from "./miniräknarKlass.js"

const aPerson = new p("Glenn", 29, "Göteborg")
const aPerson2 = new p("Anna", 60, "Malmö")
const aPerson3 = new p("Bengt", 11, "Stockholm")

aPerson.greeting()
aPerson2.greeting()
aPerson3.greeting()


aPerson.yearsLeftToPension(65)
aPerson2.yearsLeftToPension(65)
aPerson3.yearsLeftToPension(65)

const calc = new calculator()

calc.addition(aPerson.age, aPerson2.age)