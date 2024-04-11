# [Dannerd](https://www.codewars.com/users/Dannerd)

```js
function addUp(num) {
  if (isNaN(num)) {
    return 'only numbers';
  }
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

## Strategy

This function aims to calculate the sum of all numbers from 1 to a given number
num. The strategy involves validating the input to ensure it's a valid number,
then iterating through each number from 1 to num and accumulating their sum.

## Implementation

Numeric Validation: The function first checks if the input num is not a number
(isNaN(num)). If it's not a number, the function returns the string 'only
numbers', indicating that the input is invalid.

Summation: If the input is valid, the function initializes a variable sum to
store the cumulative sum. It then uses a for loop to iterate from 1 to num,
adding each number to the sum.

Return Sum: Finally, the function returns the calculated sum.
