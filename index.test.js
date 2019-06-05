const calculateLuhnModRadix = require('./index');

const data = [
    {
        n: 36,
        input: '1134806PJFB000010013CD18',
        output: 'D'
    },
    {
        n: 36,
        input: '1144701CEAA0000000004218',
        output: 'S'
    },
    {
        n: 36,
        input: '1144701AU1087AE065175318',
        output: 'P'
    },
    {
        n: 36,
        input: '111252331000000008229719',
        output: 'H'
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
