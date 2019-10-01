import { IterablePredicate } from './utils';
export const all = <T>(
    source: Iterable<T>,
    predicate: IterablePredicate<T>
): boolean => {
    const iterator = source[Symbol.iterator]();

    let idx = 0;
    let item: IteratorResult<T>;
    while (!(item = iterator.next()).done) {
        if (!predicate(item.value, idx)) {
            return false;
        }

        idx++;
    }

    return true;
};
