import { fetchData, fetchDataError } from './async';

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter with async', async () => {
  expect(await fetchData()).toBe('peanut butter');
});

test('throwing error', async () => {
  expect.assertions(1);
  return fetchDataError().catch((e) => expect(e.message).toMatch('error'));
});
