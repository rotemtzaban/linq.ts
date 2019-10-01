import { done } from './utils';

export const select = <TSource, TResult>(
    iterable: Iterable<TSource>,
    selector: (source: TSource) => TResult
): Iterable<TResult> => {
    return {
        [Symbol.iterator]: () => new SelectIterator(iterable[Symbol.iterator](), selector),
    };
};

class SelectIterator<TSource, TResult> implements Iterator<TResult> {
    constructor(
        private readonly iterator: Iterator<TSource>,
        private readonly selector: (source: TSource) => TResult
    ) {}

    public next(): IteratorResult<TResult> {
        const result = this.iterator.next();
        if (result.done) {
            return done();
        }

        return { done: false, value: this.selector(result.value) };
    }
}
