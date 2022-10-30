import NonRepeatingTuple from '../../build/data-structures/NonRepeatingTuple';

const outOfRange       = 'Error: Index out of range';
const incorrectElement = 'Error: Incorrect element type'

const tupleInstanceTests = [
    /* elements   , tuple                           , length, elementAt1, includes2, errorString     , tupleArray                       , isUnique, doubled                         , sum */
    [  [ 0, 1]    , new NonRepeatingTuple(0, 1)     , 2     , 1         , false    , outOfRange      , [new NonRepeatingTuple(0, 1)]    , false   , new NonRepeatingTuple(0, 2)     , 1    ], 
    [  [ 1, 2]    , new NonRepeatingTuple(1, 2)     , 2     , 2         , true     , outOfRange      , []                               , true    , new NonRepeatingTuple(2, 4)     , 3    ],
    [  [-1, 0,  1], new NonRepeatingTuple(-1, 0, 1) , 3     , 0         , false    , incorrectElement, [new NonRepeatingTuple(-1, 0, 1)], false   , new NonRepeatingTuple(-2, 0,  2), 0    ],  
    [  [-1, 2, -1], new NonRepeatingTuple(-1, 2)    , 2     , 2         , true     , outOfRange      , []                               , true    , new NonRepeatingTuple(-2, 4)    , 1    ]
];

const staticTupleTests = [
    [3, 4, new NonRepeatingTuple(4, 5, 6)      ],
    [4, 0, new NonRepeatingTuple(0, 1, 2, 3)   ],
    [5, 2, new NonRepeatingTuple(2, 3, 4, 5, 6)]
];  

describe(`NonRepeatingTuple`, () => {
    describe(`range returns`, () => {
        staticTupleTests.forEach(([n, offset, tuple]) => {
            test(`${tuple} when n is ${n}, and offset is ${offset}`, () => {
                expect(NonRepeatingTuple.range(n, offset)).toEqual(tuple);
            });
        });
    });

    tupleInstanceTests.forEach(([
        elements, 
        tuple, 
        length, 
        elementAt1, 
        includes2,
        errorString,
        tupleArray,
        isUnique,
        doubled,
        sum
    ]) => {
        describe(`constructor produces instance ${tuple}:`, () => {
            test(`When given ${elements}`, () => {
                expect(new NonRepeatingTuple(...elements)).toEqual(tuple);
            });
            
            test(`With length ${length}`, () => {
                expect(tuple.length).toBe(length);
            });

            test(`With ${elementAt1} at index 1`, () => {
                expect(tuple.get(1)).toBe(elementAt1);
            });

            test(`That includes 2: ${includes2}`, () => {
                expect(tuple.includes(2)).toBe(includes2);
            });

            test(`That's unique with respect to ${tupleArray}`, () => {
                expect(tuple.isUnique(tupleArray)).toBe(isUnique);
            });

            test(`That's equal to ${doubled} when doubled`, () => {
                expect(tuple.map((x) => 2 * x)).toEqual(doubled);
            });

            test(`That sums to ${sum}`, () => {
                expect(tuple.reduce((x, y) => x + y)).toEqual(sum);
            });

            test(`That cannot be modified at index 2`, () => {
                const newTuple = new NonRepeatingTuple(...elements);
                expect(newTuple.set(2, 'foo')).toBe(errorString);
                expect(newTuple).toEqual(tuple);
            });
        });
    });
});