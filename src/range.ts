import { done } from './utils';

export const range = (start: number, count: number): Iterable<number> => {
    return {
        [Symbol.iterator]:() => new RangeIterator(start, count)
    }
};

class RangeIterator implements Iterator<number> {
    private current: number = 0;
    constructor(private readonly start: number, private readonly count: number) {}
    public next(): IteratorResult<number> {
        if (this.current >= this.count) {
            return done();
        }

        const result = {
            done: false,
            value: this.start + this.current++,
        };
        
        return result;
    }
}
