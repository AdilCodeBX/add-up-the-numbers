# [Benjamin](https://edabit.com/challenge/4gzDuDkompAqujpRi)

```js
function addUp(num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}
```

## Strategy

The strategy for the `addUp` function is to calculate the sum of all numbers
from 1 to the given number `num`. This is achieved by initializing a variable to
store the sum (`result`), then iterating from 1 to `num` using a loop, adding
each number to the `result` variable.

## Implementation

- Variable Initialization: Initialize a variable `result` to store the sum,
  starting with an initial value of 0.

- Loop: Use a for loop to iterate from 1 to num. Inside the loop, add the
  current value of `i` to the `result` variable.

- Return Sum: After the loop completes, return the final sum stored in the
  `result` variable.
