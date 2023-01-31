import { useCallback, useEffect, useState } from 'react';

function useQueryItem(id) {
  const [item, setItem] = useState({});

  const fetchItem = useCallback(async () => {
    const data = (
      await (
        await fetch(`https://fortnite-api.com/v2/cosmetics/br/search?id=${id}`)
      ).json()
    ).data;
    setItem(data ?? { notFound: true });
  }, [id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return item;
}

export default useQueryItem;
