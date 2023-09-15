/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...args1) => {
  let order = ""
  return inner = (...args2) => {

    if (typeof args1 != 'string' && args1.length > 0){
      args1 = args1.join(" and ");
    }
    if (typeof args2 != 'string' && args2.length > 0){
      args2 = args2.join(" and ");
    }

    //case that no initial values are passed
    if(order.length === 0 && args1.length === 0){
      order += "I'm having a smoothie with ";
      order += args2;
    } else if (args1.length === 0){
      order += " and " + args2;
    }

    //case that initial values are passed
    if(order.length === 0 && args1.length !== 0){
      order += "I'm having a smoothie with ";
      order += args1;
      if (args2.length !== 0){
        order += " and " + args2;
      } else {
        order += " and " + args2;
      }
    }

    return order;
  }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
//prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
