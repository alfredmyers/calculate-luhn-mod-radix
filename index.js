'use strict';

const calculateLuhnModN = require('calculate-luhn-mod-n');

module.exports = function calculateLuhnModRadix(input, n){
    return calculateLuhnModN(character => Number.parseInt(character, n), codePoint => codePoint.toString(n), n, input);
}