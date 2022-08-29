// compares 2 similar arrays and returns an array of elements that are missing in the second array.

export function missingElements(arr1, arr2) {
    let missing = [];
    arr1.forEach(item => {
        if (!arr2.includes(item)) {
            missing.push(item);
        }
    });
    return missing;
}