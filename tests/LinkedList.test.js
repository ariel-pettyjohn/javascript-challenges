const { LinkedList } = require('../LinkedList');

test(`The linkedList should equal the empty LinkedList`, () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual(new LinkedList());
    expect(linkedList.size).toBe(0);
});

test(`The elements of linkedList should be (100)`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    expect(linkedList.getAt(0)).toBe(100);
    expect(linkedList.size).toBe(1);
});

test(`The elements of linkedList should be (200, 100)`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    expect(linkedList.getAt(0)).toBe(200);
    expect(linkedList.getAt(1)).toBe(100);
    expect(linkedList.size).toBe(2);
});

test(`The elements of linkedList should be (300, 200, 100)`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    linkedList.insertFirst(300);
    expect(linkedList.getAt(0)).toBe(300);
    expect(linkedList.getAt(1)).toBe(200);
    expect(linkedList.getAt(2)).toBe(100);
    expect(linkedList.size).toBe(3);
});

test(`The elements of linkedList should be (300, 200, 100, 400))`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    linkedList.insertFirst(300);
    linkedList.insertLast(400);
    expect(linkedList.getAt(0)).toBe(300);
    expect(linkedList.getAt(1)).toBe(200);
    expect(linkedList.getAt(2)).toBe(100);
    expect(linkedList.getAt(3)).toBe(400);
    expect(linkedList.size).toBe(4);
});

test(`The elements of linkedList should be (300, 200, 100, 500, 400)`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    linkedList.insertFirst(300);
    linkedList.insertLast(400);
    linkedList.insertAt(500, 3);
    expect(linkedList.getAt(0)).toBe(300);
    expect(linkedList.getAt(1)).toBe(200);
    expect(linkedList.getAt(2)).toBe(100);
    expect(linkedList.getAt(3)).toBe(500);
    expect(linkedList.getAt(4)).toBe(400);
    expect(linkedList.size).toBe(5);
});

test(`The elements of linkedList should be (300, 200, 100, 400)`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    linkedList.insertFirst(300);
    linkedList.insertLast(400);
    linkedList.insertAt(500, 3);
    linkedList.removeAt(3);
    expect(linkedList.getAt(0)).toBe(300);
    expect(linkedList.getAt(1)).toBe(200);
    expect(linkedList.getAt(2)).toBe(100);
    expect(linkedList.getAt(3)).toBe(400);
    expect(linkedList.size).toBe(4);
});

test(`The linkedList should equal the empty LinkedList`, () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(100);
    linkedList.insertFirst(200);
    linkedList.insertFirst(300);
    linkedList.insertLast(400);
    linkedList.insertAt(500, 3);
    linkedList.removeAt(3);
    linkedList.clearList();
    expect(linkedList).toEqual(new LinkedList());
    expect(linkedList.size).toBe(0);
});