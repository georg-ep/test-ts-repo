"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.reverse = reverse;
exports.truncate = truncate;
exports.isPalindrome = isPalindrome;
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function reverse(str) {
    return str.split('').reverse().join('');
}
function truncate(str, length) {
    if (str.length <= length)
        return str;
    return str.slice(0, length) + '...';
}
function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
