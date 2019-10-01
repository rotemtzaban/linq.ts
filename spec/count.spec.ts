import { assert } from 'chai';
import 'mocha';
import { count } from '../src/count';
import { range } from './../src/range';

describe('count', () => {
    it('should return array length', () => {
        assert.equal(count([1, 2, 3]), 3);
    });

    it('should return correct result for generators', () => {
        assert.equal(count(g()), 2);
    });

    it('should return correct result for range iterables', () => {
        const rangeIterable = range(0, 5);
        assert.equal(count(rangeIterable), 5);
        assert.typeOf
    });
});

function* g() {
    yield 1;
    yield '5';
}
