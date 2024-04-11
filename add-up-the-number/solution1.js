'use strict';

/**
 * Adds up all the numbers from 1 to the given number.
 *
 * @param {number} num - The number to add up.
 * @returns {number} The sum of all numbers from 1 to the given number.
 */
export function addUp(num) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number');
    }
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
