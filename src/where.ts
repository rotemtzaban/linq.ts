import { done, IterablePredicate } from './utils';

export function where<T>(iterable: Iterable<T>, predicate: IterablePredicate<T>): Iterable<T> {
    return {
        [Symbol.iterator]: () => new WhereIterator(iterable[Symbol.iterator](), predicate),
    };
}

class WhereIterator<T> implements Iterator<T> {
    private index: number = 0;
    constructor(
        private readonly iterator: Iterator<T>,
        private readonly predicate: IterablePredicate<T>
    ) {}

    public next(): IteratorResult<T> {
        while (true) {
            this.index++;
            const currIndex = this.index;
            const result = this.iterator.next();
            if (result.done) {
                return done();
            }
            if (this.predicate(result.value, currIndex)) {
                return { done: false, value: result.value };
            }
        }
    }
}


