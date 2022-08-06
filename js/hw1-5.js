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

function getCommonElements(array1, array2) {
   // Change code below this line
   // const array1 = [];
   //   const array2 = [];
   let newMas = [];
   for (let i = 0; i <= array1.length; i++) {
      if (array2.includes(array1[i])) {
         newMas.push(array1[i]);
      }

      return newMas;
      // Change code above this line
   }
}

getCommonElements([1, 2, 3], [2, 1, 17, 19]);