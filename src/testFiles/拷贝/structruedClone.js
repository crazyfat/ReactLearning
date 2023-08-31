let obj = {
    a: 123,
    c: undefined,
    d: new Set([1,2]),
}
console.log(JSON.parse(JSON.stringify(obj)));
console.log(structuredClone(obj))