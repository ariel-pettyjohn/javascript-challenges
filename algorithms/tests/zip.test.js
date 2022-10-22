const { zip } = require('../zip');

const tests = [
    [
        [
            ["John", "Charles", "Mike"], 
            ["Jenny", "Christy", "Monica"]
        ], [
            ['John', 'Jenny'], 
            ['Charles', 'Christy'], 
            ['Mike', 'Monica']
        ]
    ], [
        [
            ["John", "Charles", "Mike"], 
            ["Jenny", "Christy", "Monica", "Vicky"]
        ], [
            ['John', 'Jenny'], 
            ['Charles', 'Christy'], 
            ['Mike', 'Monica']
        ]
    ]
];

tests.forEach(([arrays, expectedArray]) => {
    const text = `of ${arrays} should be ${expectedArray}`;

    test(`zip ${text}`, () => {
        expect(zip(...arrays)).toEqual(expectedArray);
    });
});