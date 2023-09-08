const getBigger = (a, b) => a > b ? a : b;

const getSmallest = (arr) => (arr.length === 0) ? null : arr.sort((a, b) => a - b)[0];

const countValue = (arr, value) => (arr.length === 0) ? 0 : (value == undefined) ? null : arr.filter(el => el === value).length;

module.exports = { getBigger, getSmallest, countValue };

