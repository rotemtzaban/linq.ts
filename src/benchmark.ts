// import * as x from './where';
import Benchmark, { options } from 'benchmark';
import { CLIENT_RENEG_WINDOW } from 'tls';
import { LinqIterable } from './linqIterable';
import { range } from './range';
import { IterablePredicate } from './utils';
import { where } from './where';

const arr = Array.from(range(0, 100000));
const suite = new Benchmark.Suite();
const set = new Set(arr);
const map = new Map();
const last = arr[arr.length - 1];
suite
.add('x', g)
    // .add('set', () => {
    //     set.has(last);
    //     set.has(-1);
    // })
    // .add('array', () => {
    //     arr.includes(last);
    //     arr.includes(-1);
    // })
    .on('cycle', (ev: any) => {
        console.log(String(ev.target));
    })
    .run({async:true});

function f():PromiseLike<string>{
    return Promise.resolve('a');
}
async function g(){
    return await 'a';
}
const x = typeof g;
