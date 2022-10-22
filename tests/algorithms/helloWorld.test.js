const { helloWorld } = require('../../build/algorithms/helloWorld');

test(`helloWorld should return the text 'Hello World!'`, () => {
    expect(helloWorld()).toBe('Hello World!');
});
