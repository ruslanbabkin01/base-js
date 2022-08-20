// function sayHi() {
//   console.log("Hello, this is my first function!")
//   };
// sayHi();


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {


// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

// const message = `You ordered droids worth  ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//   return message;
// }


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if ( totalPrice > customerCredits){
//     message = "Insufficient funds!";
//   }
//   else{
//     totalPrice = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`
//   }
//   // Change code above this line
//   return message;
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent => 50000) {
//     discount = GOLD_DISCOUNT;
//   }

//   else if (totalSpent => 20000 && totalSpent < 50000){
//     discount = SILVER_DISCOUNT;
//   }
  
//   else if (totalSpent => 5000 && totalSpent < 20000){
// discount = BRONZE_DISCOUNT;
//   }

//     else {
//       discount = BASE_DISCOUNT;
//     }
//   // Change code above this line
//   return discount;
// }

// function getCommonElements(array1, array2) {
//    // Change code below this line
//    // const array1 = [];
//    //   const array2 = [];
//    let newMas = [];
//    for (let i = 0; i <= array1.length; i++) {
//       if (array2.includes(array1[i])) {
//          newMas.push(array1[i]);
//       }

//       return newMas;
//       // Change code above this line
//    }
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
// for (const product of products) {
//     if (product.name === productName) {
//        totalPrice = product.price * product.quantity;
//        console.log(totalPrice);
//     }
// }
//  console.log(totalPrice);
// }

// calculateTotalPrice('Radar');


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const {name} = this.potions[i];
//       if (name === potionName) {
//       return potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         return potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// atTheOldToad.removePotion('Stone skin');
// console.log(atTheOldToad.potions);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//     firstArray.forEach(function (i, index){
//       if (secondArray.includes(firstArray[i])){
//         commonElements.push(firstArray[i]);
//       },
//     });
//   return commonElements;
//   // Change code above this line
// }

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const gender = "male";
//   const filt = users.filter(el => el.gender === gender).reduce((acc, ell) => acc + ell.balance, 0);

//   console.table(filt);

