# [omaymaguelmami](https://edabit.com/challenge/4gzDuDkompAqujpRi)

```js
function addUp(num) {
  if (num === 0) {
    return num;
  }
  return num + addUp(num - 1);
}
```

## Strategy

The `addUp` function calculates the sum of all numbers from 1 to `num` using
recursion. The strategy involved here is to break down the problem into smaller
sub-problems: to find the sum of `num`, `num` is added to the sum of all numbers
before `num`. This process repeats until it reaches the base case, which is when
`num` is 0.

## Implementation

-Base Case: If num is 0, the function returns 0 because the sum of all numbers
from 1 to 0 is 0.

-Recursion: If `num` is not 0, the function calculates the sum of `num` by
adding `num` to the sum of all numbers from 1 to `num-1`. This is done by
recursively calling the `addUp` function with the argument `num-1`.
