const lib = require('./lib');
const test = require('tape');


test('test Array, return first and last arguments as Array', function (t) {
  t.plan(1);
  const source = [1,2,3,4,5,6];
  const expectedResult = [1,6];
  const result = lib.firstLast(source);

  t.deepEqual(result, expectedResult);
});

/*
test('test Array Reverse function, without Array.reverse', function (t) {
  t.plan(1);
  const source = [1,2,3,4,5,6];
  const expectedResult = [6,5,4,3,2,1];
  const result = lib.reverse(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, Reverse function, return first 2 arguments, as Array, without Array.reverse', function (t) {
  t.plan(1);
  const source = [1,2,3,4,5,6];
  const expectedResult = [6,1];
  const result = lib.firstLastElementReverse(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, return multiplied values', function (t) {
  t.plan(1);
  const source = [1,2,3,4,5,6];
  const expectedResult = [10,20,30,40,50,60];
  const result = lib.arrayMultiply(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, return sliced values between start and end positions', function (t) {
  t.plan(1);
  const source = [1,2,3,4,5,6];
  const expectedResult = [3,4];
  const result = lib.partial(source, 2, 5);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, combine arrays', function (t) {
  t.plan(1);
  const source1 = [1,2,3];
  const source2 = [4,5,6];
  const expectedResult = [4,5,6,1,2,3];
  const result = lib.combine(source1, source2);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, combine arrays and multiply', function (t) {
  t.plan(1);
  const source1 = [1,2,3];
  const source2 = [4,5,6];
  const expectedResult = [4,5,6,1,2,3,4,5,6,1,2,3];
  const result = lib.combineMultiply(source1, source2);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, remove values from array', function (t) {
  t.plan(1);
  const source1 = [1,2,3,4,5,6,7];
  const source2 = [4,1,6];
  const expectedResult = [2,3,5,7];
  const result = lib.remove(source1, source2);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, map array integer values with array string values', function (t) {
  t.plan(1);
  const source1 = [1,2,3,4,5,6,7];
  const source2 = ['a','b','c','d','e','f','g'];
  const expectedResult = ['1a','2b','3c','4d','5e','6f','7g'];
  const result = lib.mapArrayString(source1, source2);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, sort, without sort function', function (t) {
  t.plan(1);
  const source = [3,2,1,4,7,6,9,8,0,5];
  const expectedResult = [0,1,2,3,4,5,6,7,8,9];
  const result = lib.sort(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, sort reverse, without sort and reverse function', function (t) {
  t.plan(1);
  const source = [3,2,1,4,7,6,9,8,0,5];
  const expectedResult = [9,8,7,6,5,4,3,2,1,0];
  const result = lib.sortReverse(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, return Odd and Even values', function (t) {
  t.plan(1);
  const source = [3,2,1,4,7,6,9,8,0,5];
  const expectedResult = [0,2,4,6,8,1,3,5,7,9];
  const result = lib.sortEvenOdd(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, return sum', function (t) {
  t.plan(1);
  const source = [3,2,1,4,7,6,9,8,0,5];
  const expectedResult = 45;
  const result = lib.sum(source);

  t.deepEqual(result, expectedResult);
});
*/

/*
test('test Array, sum of Odd values - sum of Even', function (t) {
  t.plan(1);
  const source = [3,2,1,4,7,6,9,8,0,5];
  const expectedResult = 5;
  const result = lib.sumOddMinusSumEven(source);

  t.deepEqual(result, expectedResult);
});
*/