export async function fetchData() {
  return 'peanut butter';
}

export async function fetchDataError() {
  throw new Error('error');
}
