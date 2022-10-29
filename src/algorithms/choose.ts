export function choose (list: any[], k: number, prefix: any[] = []): any[] {
    if (k === 0) return [prefix];
    return list.flatMap((element, index) => {
        return choose(list.slice(index + 1), k - 1, [...prefix, element]);
    });
}