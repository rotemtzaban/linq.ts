import { done } from './utils';

export function selectMany<TSource, TResult>(
    source: Iterable<TSource>,
    selector: (item: TSource) => Iterable<TResult>
): Iterable<TResult> {
    return selectManyGen(source, selector);
}

function* selectManyGen<TSource, TResult>(
    source: Iterable<TSource>,
    selector: (item: TSource, index: number) => Iterable<TResult>
) {
    let index = 0;
    for (const item of source) {
        yield* selector(item, index++);
    }
}
