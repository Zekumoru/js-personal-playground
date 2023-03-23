import { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import fetchColors, {
  fetchColorsLength,
  FetchColorsOption,
} from '../api/fetchColors';
import ErrorPreview from '../components/ErrorPreview';
import Color from '../types/colors.types';

const InfiniteQueries = () => {
  const limit = 2;
  const {
    data: colorsLength,
    isError: isErrorColorsLength,
    error: errorColorsLength,
  } = useQuery('colors-length', fetchColorsLength);

  const {
    data: colorsPages,
    isError: isErrorColors,
    error: errorColors,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<
    Color[],
    unknown,
    Color[],
    (string | FetchColorsOption)[]
  >(
    ['colors'],
    ({ pageParam = 1 }) => fetchColors({ page: pageParam, limit: 2 }),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (colorsLength && pages.length < colorsLength / limit) {
          return pages.length + 1;
        }

        return undefined;
      },
    }
  );

  if (isErrorColorsLength || isErrorColors) {
    return <ErrorPreview error={errorColorsLength ?? errorColors} />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Colors</h2>
      <ul>
        {colorsPages?.pages.map((colorsPage) =>
          colorsPage.map((color) => (
            <li className="capitalize" key={color.id}>
              {color.label}
            </li>
          ))
        )}
      </ul>
      <button
        className="btn mt-2"
        onClick={() => {
          if (isFetchingNextPage) return;
          fetchNextPage();
        }}
        disabled={!hasNextPage}
      >
        Load More
      </button>
      {isFetching && isFetchingNextPage && (
        <div className="mt-1">Fetching...</div>
      )}
    </div>
  );
};

export default InfiniteQueries;
