import Tuple from '../../build/data-structures/Tuple';

const TupleInstanceTests = [
    [[ 0, 1]    , new Tuple(0, 1)     , 2, 1, 'Error: Index out of range'    ], 
    [[ 1, 2]    , new Tuple(1, 2)     , 2, 2, 'Error: Index out of range'    ],
    [[-1, 0,  1], new Tuple(-1, 0, 1) , 3, 0, 'Error: Incorrect element type'],  
    [[-1, 2, -1], new Tuple(-1, 2, -1), 3, 2, 'Error: Incorrect element type']
];

describe(`Tuple:`, () => {
    TupleInstanceTests.forEach(([elements, tuple, length, element, errorString]) => {
        describe(`Constructor produces instance ${tuple}:`, () => {
            test(`When given ${elements}`, () => {
                expect(new Tuple(...elements)).toEqual(tuple);
            });
            
            test(`With length ${length}`, () => {
                expect(tuple.length).toBe(length);
            });

            test(`With ${element} at index 1`, () => {
                expect(tuple.get(1)).toBe(element);
            });

            test(`That cannot be modified at index 2`, () => {
                const newTuple = new Tuple(...elements);
                expect(newTuple.set(2, 'foo')).toBe(errorString);
                expect(newTuple).toEqual(tuple);
            });
        });
    });
});