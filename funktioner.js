let a = 'Public';
let b = 'Sauce';

function tellAboutSauce() {
  // the local variable a only lives in this function
  // and shadows the outer a variable
  let a = 'Secret';
  return a + ' ' + b;
}

function tellMeMore() {
  return a + ' ' + b;
}

console.log(tellAboutSauce());
console.log(tellMeMore());