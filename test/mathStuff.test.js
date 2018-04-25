var { add, subtract, multiply } = require('../src/mathStuff');

describe('add()', () => {
    test('1 + 1 = 2, duh!', () => {
        expect(add(1, 1)).toBe(2);
    });

    test('Strings should not concatenate', () => {
        expect(add('6', '9')).toBe(15);
    });
});

describe('subtract()', () => {
    test('100 - 1 = 99, obviously!', () => {
        expect(subtract(100, 1)).toBe(99);
    });

    test('Strings should not concatenate', () => {
        expect(subtract('6', '9')).toBe(-3);
    });
});

describe('multiply()', () => {
    test('100 * 2 = 200, of course!', () => {
        expect(multiply(100, 2)).toBe(200);
    });

    test('Strings should not concatenate', () => {
        expect(multiply('6', '9')).toBe(54);
    });
});
