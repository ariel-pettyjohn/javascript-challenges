import Tuple from '../../build/data-structures/Tuple';

const outOfRange       = 'Error: Index out of range';
const incorrectElement = 'Error: Incorrect element type'

const TupleInstanceTests = [
    /* elements   , tuple               , length, elementAt1, includes2, errorString     , tupleArray           , isUnique */
    [  [ 0, 1]    , new Tuple(0, 1)     , 2     , 1         , false    , outOfRange      , [new Tuple(0, 1)]    , false     ], 
    [  [ 1, 2]    , new Tuple(1, 2)     , 2     , 2         , true     , outOfRange      , []                   , true      ],
    [  [-1, 0,  1], new Tuple(-1, 0, 1) , 3     , 0         , false    , incorrectElement, [new Tuple(-1, 0, 1)], false     ],  
    [  [-1, 2, -1], new Tuple(-1, 2, -1), 3     , 2         , true     , incorrectElement, []                   , true      ]
];

describe(`Tuple:`, () => {
    TupleInstanceTests.forEach(([
        elements, 
        tuple, 
        length, 
        elementAt1, 
        includes2,
        errorString,
        tupleArray,
        isUnique
    ]) => {
        describe(`Constructor produces instance ${tuple}:`, () => {
            test(`When given ${elements}`, () => {
                expect(new Tuple(...elements)).toEqual(tuple);
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

            test(`That cannot be modified at index 2`, () => {
                const newTuple = new Tuple(...elements);
                expect(newTuple.set(2, 'foo')).toBe(errorString);
                expect(newTuple).toEqual(tuple);
            });
        });
    });
});