import { assert } from 'chai';
export function assertSameOrder<T>(first:Iterable<T>, second:Iterable<T>, message?:string){
    assert.sameOrderedMembers(Array.from(first), Array.from(second), message);
}