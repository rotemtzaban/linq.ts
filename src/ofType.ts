import { done } from './utils';

export function ofClass<TSource extends object, TResult extends TSource>(
    source: Iterable<TSource>,
    type: Class<TResult>
) {
    const typeChecker = (x: TSource) => x instanceof type;
    return ofType<TSource, TResult>(source, typeChecker as TypeChecker<TSource, TResult>);
}

export function ofType<TSource, TResult extends TSource>(
    source: Iterable<TSource>,
    typeChecker: TypeChecker<TSource, TResult>
): Iterable<TResult> {
    return {
        [Symbol.iterator]: () => new OfTypeIterator(source[Symbol.iterator](), typeChecker),
    };
}

interface Class<T> extends Function {
    prototype: T;
}

type TypeChecker<TSource, TResult extends TSource> = (source: TSource) => source is TResult;

class OfTypeIterator<TSource, TResult extends TSource> implements Iterator<TResult> {
    constructor(
        private readonly source: Iterator<TSource>,
        private readonly typeChecker: TypeChecker<TSource, TResult>
    ) {}

    public next(): IteratorResult<TResult> {
        let item = this.source.next();
        while (!item.done) {
            const value = item.value;
            if (this.typeChecker(value)) {
                return { value, done: false };
            }

            item = this.source.next();
        }

        return done();
    }
}

function isOfType<T extends object>(x: object, type: Class<T>): x is T {
    return x.constructor === type;
}
