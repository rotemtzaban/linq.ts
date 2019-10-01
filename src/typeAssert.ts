export function typeAssert<TSource, TResult extends TSource>(source: Iterable<TSource>) {
    return {
        [Symbol.iterator]:() => new TypeAssertIterator<TSource, TResult>(source[Symbol.iterator]())
    }
}

class TypeAssertIterator<TSource, TResult extends TSource> implements Iterator<TResult> {
    constructor(private readonly source: Iterator<TSource>) {}

    public next(): IteratorResult<TResult> {
        const next = this.source.next();
        return { value: next.value as TResult, done: next.done };
    }
}
