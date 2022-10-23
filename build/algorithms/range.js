export default function range(n, offset = 0) {
    const array = [...Array(n).keys()];
    return offset ? array.map((key) => key + offset) : array;
}
// TODO: Implement recursive range function
