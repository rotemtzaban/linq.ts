import { IterablePredicate } from './utils';
export const count = <T>(
    source: Iterable<T>,
    predicate?: IterablePredicate<T>
): number => {
    let counter = 0;
    const iterator = source[Symbol.iterator]();
    if (!predicate) {
        return countIterator(iterator);
    }

    let idx = 0;
    let item: IteratorResult<T>;
    while (!(item = iterator.next()).done) {
        if (predicate(item.value, idx)) {
            counter++;
        }
        idx++;
    }

    return counter;
};

const countIterator = <T>(iterator: Iterator<T>): number => {
    let counter = 0;
    while (!iterator.next().done) {
        counter++;
    }

    return counter;
};
