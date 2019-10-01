import { IterablePredicate } from './utils';
export const some = <T>(
    source: Iterable<T>,
    predicate?: IterablePredicate<T>
): boolean => {
    const iterator = source[Symbol.iterator]();
    if (!predicate) {
        return !iterator.next().done;
    }

    let idx = 0;
    let item: IteratorResult<T>;
    while (!(item = iterator.next()).done) {
        if (predicate(item.value, idx)) {
            return true;
        }
        idx++;
    }

    return false;
};
