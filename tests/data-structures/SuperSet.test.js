import SuperSet from '../../build/data-structures/SuperSet';

test(`superSetA should equal superSetB`, () => {
    const superSetA = new SuperSet([1, 2, 3, 3, 4]);
    const superSetB = new SuperSet([1, 2, 2, 3, 4]);
    expect(superSetA).toEqual(superSetB);
});