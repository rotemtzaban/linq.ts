export function buffer<T>(source: Iterable<T>, size: number): Iterable<T[]>;
export function buffer<T, TTarget>(
    source: Iterable<T>,
    size: number,
    selector: (buff: Iterable<T>) => TTarget
): Iterable<TTarget>;

export function buffer<T, TTarget>(
    source: Iterable<T>,
    size: number,
    selector?: (buff: T[]) => TTarget
) {
    return bufferGenerator(source, size, selector);
}

function* bufferGenerator<T, TTarget>(
    source: Iterable<T>,
    size: number,
    selector?: (buff: T[]) => TTarget
) {
    let buff: T[] = [];
    for (const item of source) {
        buff.push(item);
        if (buff.length >= size) {
            yield selector ? selector(buff) : buff;

            buff = [];
        }
    }

    if (buff.length > 0) {
        yield selector ? selector(buff) : buff;
    }
}
