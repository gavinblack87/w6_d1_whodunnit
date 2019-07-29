// //Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict); //Miss Scarlet



// //Episode 2
// const murderer = 'Professor Plum';
//
// // const changeMurderer = function() { //will return error and have to be removed
// //   murderer = 'Mrs. Peacock';
// // }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`; //const murderer is plum
// }
//
// // changeMurderer(); // error - have to be removed
// const verdict = declareMurderer(); //prefessor plum
// console.log(verdict);

// // Episode 3
// let murderer = 'Professor Plum'; // will remain for second verdict
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock'; // in an object so on available in it.
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); // will return Mrs, Peacock
//
// const secondVerdict = `The murderer is ${murderer}.`; // professor plum
// console.log('Second Verdict: ', secondVerdict);

// // Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects); //will return string in declareAllSuspects with Colonel Mustard @3
// console.log(`Suspect three is ${suspectThree}.`); //will log Mrs Peacock
//
// // Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon; //in an object so can be changed.
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`; //named function below so will be 'Revolver'
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon(); //revolver
// console.log(verdict);

// // Episode 6
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green'; //would change to mr green if called
//   const plotTwist = function() {
//     murderer = 'Mrs. White';  //changes to mrs white if called as murderer is still a 'let'
//   }
//   plotTwist(); // changes to mrs white
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`; //Mrs White
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 7
// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green'; //globally set to mr green and called first so will always be used.
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//     unexpectedOutcome();
//   }
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); //
// const verdict = declareMurderer(); //Mr Green  - dont really get it, thought it would be miss scarlett
// console.log(verdict);

// Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//   const plotTwist = function(room) {// room = dining room
//     if (scenario.room === room) { // is equal to therefore it can run
//       scenario.murderer = 'Colonel Mustard'; // colonel mustard
//     }
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) { //it is colonel mustard therefore it can run
//         scenario.weapon = 'Candle Stick'; //changes to candlstick
//       }
//     }
//     unexpectedOutcome('Colonel Mustard');
//   }
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`//candlestick
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
//
// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {//if exact it can run
  let murderer = 'Mrs. Peacock'; //allowed to run but just in object so wont affect murderer
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`; //remains professor plum
}

const verdict = declareMurderer();
console.log(verdict); //Pro Plum
