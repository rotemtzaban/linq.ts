function max<T>(source: Iterable<T>, comparer?: (first: T, second: T) => number): T | null {
    let maxValue: T | null = null;
    if (comparer) {
        for (const item of source) {
            if (!maxValue || comparer(maxValue, item) < 0) {
                maxValue = item;
            }
        }
    } else {
        for (const item of source) {
            if (!maxValue || maxValue < item) {
                maxValue = item;
            }
        }
    }

    return maxValue;
}
