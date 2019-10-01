export function done<T>(): IteratorResult<T> {
    return { done: true } as IteratorResult<T>;
}

export type IterablePredicate<T> = (item:T, idx:number) => boolean;