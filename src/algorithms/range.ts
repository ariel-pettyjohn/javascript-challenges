function range (n: number, offset: number = 0): number[] {
    const array: number[] = [...Array(n).keys()];
    return offset ? array.map((key) => key + offset): array;
}

// TODO: Implement recursive range function

module.exports = { range };