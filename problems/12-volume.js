/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = height => {
  let width;
  let length;
  return volume = (x) => {
    if(width === undefined){
      width = x;
    } else if(length === undefined){
      length = x;
    }

    return (width != undefined && length != undefined) ? width * length * height : volume;
  }
}

// let firstCall = recVolume(7);
// console.log(firstCall);

// let val1 = firstCall(4);
// console.log(val1);

// let val2 = firstCall(5);
// console.log(val2);

// console.log(firstCall(4));
// console.log(firstCall(5));
// console.log(firstCall());
// console.log(firstCall(100));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
