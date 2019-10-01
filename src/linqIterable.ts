import { all } from './all';
import { any } from './any';
import { count } from './count';
import { range } from './range';
import { select } from './select';
import { IterablePredicate } from './utils';
import { where } from './where';

export class LinqIterable<T> implements Iterable<T> {
    public static range(start:number, count:number) {
        return range(start, count);
    }

    constructor(private readonly iterable: Iterable<T>) {}

    public [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }

    public where(predicate: IterablePredicate<T>) {
        return new LinqIterable(where(this.iterable, predicate));
    }

    public select<TResult>(selector: (source: T) => TResult) {
        return new LinqIterable(select(this.iterable, selector));
    }

    public count(predicate?: IterablePredicate<T>) {
        return count(this.iterable, predicate);
    }

    public any(predicate?:IterablePredicate<T>){
        return any(this.iterable, predicate);
    }

    public all(predicate:IterablePredicate<T>){
        return all(this.iterable, predicate);
    }

    public toArray(){
        return Array.from(this.iterable);
    }
}
