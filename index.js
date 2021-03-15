// //code here
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(arr, event) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    // debugger;
  }
  return newArr;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(intgr) {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
}
countDown(10);
