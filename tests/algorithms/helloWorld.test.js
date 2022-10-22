const { helloWorld } = require('../../build/helloWorld');

test(`helloWorld should return the text 'Hello World!'`, () => {
    expect(helloWorld()).toBe('Hello World!');
});
