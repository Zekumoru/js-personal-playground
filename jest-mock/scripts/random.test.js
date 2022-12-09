import random from './random';

test('Get random integer to be 5', () => {
  jest.spyOn(Math, 'random').mockImplementationOnce(() => 5);
  expect(random.getInt(1)).toBe(5);
});

test('Get random integer to be 25', () => {
  jest.spyOn(Math, 'random').mockImplementationOnce(() => 25);
  expect(random.getInt(1)).toBe(25);
});
