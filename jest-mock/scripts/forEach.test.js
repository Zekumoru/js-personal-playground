import { forEach } from './forEach';

const mockCallback = jest.fn((x) => x + 2);
forEach([0, 1], mockCallback);

test('callback is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test('arguments are correct', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('results are correct', () => {
  expect(mockCallback.mock.results[0].value).toBe(2);
  expect(mockCallback.mock.results[1].value).toBe(3);
});

test('mock forEach', () => {
  const mockedForEach = jest.fn(forEach).mockImplementationOnce(() => 'hi');
  expect(mockedForEach()).toMatch('hi');
});
