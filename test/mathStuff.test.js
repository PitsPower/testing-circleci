var { add, subtract } = require('../src/mathStuff');

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
