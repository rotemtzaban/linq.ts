import 'mocha';
import { selectMany } from '../src/selectMany';
import { assertSameOrder } from './assertionUtils';

describe('selectMany', () => {
    it('should return same when selector is identity', () => {
        const source = [1, 2, 3, 4];
        const result = selectMany(source, (x) => [x]);
        assertSameOrder(source, result);
    });

    it('should return same when selector is identity2', () => {
        const source = [[1], [2], [3], [4]];
        const result = selectMany(source, (x) => x);
        assertSameOrder([1, 2, 3, 4], result);
    });
});
