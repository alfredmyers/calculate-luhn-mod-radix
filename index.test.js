const calculateLuhnModRadix = require('./index');

const data = [
    {
        n: 36,
        input: '1134806PJFB000010013CD18',
        output: 'D'
    },
    //test based on algorithm description in https://en.wikipedia.org/wiki/Luhn_algorithm
    {
        n: 10,
        input: '7992739871',
        output: '3'
    }
];

data.forEach(item => {
    test('', () => { expect(calculateLuhnModRadix(item.input, item.n).toUpperCase()).toBe(item.output)});
});
