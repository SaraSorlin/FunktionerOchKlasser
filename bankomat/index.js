import bankomat from "./bankomat.js"
import kort from "./kort.js"

const bankomaten = new bankomat(true, true, 11000)
const kortet = new kort(15000, "0123")

console.log(bankomaten.machinebalance())