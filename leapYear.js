// let input2 = 2000

// Create a function to detect a leap year within range of years. First input will be start year, and second input will be end of year. Your function should detect the leap years between first input and second input.

// You can find the "rules of leap year" through your favorite search engine.

let result = "";
function leap(input1,input2) {
  for (input1 = input1 + 4; input1 < input2 + 4; input1 += 4) {
    result += input1 + ",";
    console.log(result);
  }
}
(leap(1900, 2000);
