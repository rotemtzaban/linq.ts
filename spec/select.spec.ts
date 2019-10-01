import { assert } from 'chai';
import 'mocha';
import { select } from '../src/select';
import { assertSameOrder } from './assertionUtils';

describe('select', () => {
    it('should return same when selector is identity', () => {
        const source = [1, 2, 3, 4];
        const result = select(source, (x) => x);
        assertSameOrder(source, result);
    });

    it('should not evaluate if next not called', () => {
        const source = [1, 2, 3, 4];
        const result = select(source, (x) => {
            assert.fail();
            return true;
        });

        assert.doesNotThrow(() => result[Symbol.iterator]());
    });

    it('should evaluate elements lazily', () => {
        const source = [1, 2, 3, 4];
        const result = select(source, (x) => {
            if(x === 2){
                assert.fail();
            }
            return x;
        });

        const iterator = result[Symbol.iterator]();
        assert.equal(iterator.next().value, 1);

        assert.throws(() => iterator.next());
    });
});
