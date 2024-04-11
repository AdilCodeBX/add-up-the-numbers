'use strict';

import { addUp } from './solution1.js';

describe('addUp function', () => {
    it('should return the correct sum when a valid number is passed', () => {
        expect(addUp(5)).toEqual(15); // 1 + 2 + 3 + 4 + 5 = 15
        expect(addUp(10)).toEqual(55); // 1 + 2 + ... + 10 = 55
        expect(addUp(100)).toEqual(5050); // 1 + 2 + ... + 100 = 5050
    });

    it('should return "only numbers" when a non-number is passed', () => {
        expect(addUp('abc')).toEqual('only numbers');
        expect(addUp(true)).toEqual('only numbers');
        expect(addUp([])).toEqual('only numbers');
        expect(addUp({})).toEqual('only numbers');
    });
});
