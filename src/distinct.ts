export function distinct<T>(source:Iterable<T>){
    return distinctGenerator(source);
}

function* distinctGenerator<T>(source:Iterable<T>) {
    const set = new Set<T>();
    for (const item of source) {
        if(!set.has(item)){
            yield item;
            set.add(item);
        }
    }
}