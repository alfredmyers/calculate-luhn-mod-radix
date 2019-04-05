'use strict';

const calculateLuhnModN = require('calculate-luhn-mod-n');

module.exports = function calculateLuhnModRadix(input, n){
    var codePoints = new Array(input.length);
    for (let index = 0; index < input.length; index++) {
        codePoints[index] = parseInt(input[index], n);
    }
    return Number(calculateLuhnModN(codePoints, n)).toString(n);
}