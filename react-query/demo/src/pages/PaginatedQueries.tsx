import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchColors, {
  fetchColorsLength,
  FetchColorsOption,
} from '../api/fetchColors';
import ErrorPreview from '../components/ErrorPreview';
import Color from '../types/colors.types';

const PaginatedQueries = () => {
  const limit = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: colorsLength,
    isError: isErrorColorsLength,
    error: errorColorsLength,
  } = useQuery('colors-length', fetchColorsLength);

  const {
    data: colors,
    isError: isErrorColors,
    error: errorColors,
    isFetching,
  } = useQuery<Color[], unknown, Color[], (string | FetchColorsOption)[]>(
    ['colors', { page: currentPage, limit }],
    fetchColors,
    {
      keepPreviousData: true,
    }
  );

  if (isErrorColors || isErrorColorsLength) {
    return <ErrorPreview error={errorColors ?? errorColorsLength} />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Colors</h2>
      <ul>
        {colors?.map((color) => (
          <li className="capitalize" key={color.label}>
            {color.label}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex gap-2">
        <button
          className="btn"
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={isFetching || currentPage <= 1}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={
            isFetching ||
            colorsLength === undefined ||
            currentPage * limit >= colorsLength
          }
        >
          Next
        </button>
      </div>
      {colorsLength && (
        <div className="mt-1">
          Page {currentPage} of {colorsLength / limit}
        </div>
      )}
      {isFetching && <div>Loading...</div>}
    </div>
  );
};

export default PaginatedQueries;
