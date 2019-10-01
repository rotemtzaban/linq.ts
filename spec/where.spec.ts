import { assert } from 'chai';
import 'mocha';
import { where } from '../src/where';

describe('where', () => {
    it('should filter even numbers', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = Array.from(where(input, (item) => item % 2 === 1));
        assert.sameOrderedMembers([1, 3, 5], result);
    });

    it('should work on empty sequence', () => {
        const input: number[] = [];
        const result = Array.from(where(input, (item) => item % 2 === 1));
        assert.isEmpty(result);
    });

    it('should return empty sequence on false predicate', () => {
        const input = [1, 1, 1];
        const result = Array.from(where(input, (item) => false));
        assert.isEmpty(result);
    });

    it('should return same sequence on true predicate', () => {
        const input = [1, 1, 1];
        const result = Array.from(where(input, (item) => true));
        assert.sameOrderedMembers(input, result);
    });

    it('should not evaluate if next not called', () => {
        const input = [1, 1, 1];
        const result = where(input, (x) => {
            assert.fail();
            return false;
        });

        const iterator = result[Symbol.iterator]();
        assert.throws(() => iterator.next());
    });
});
