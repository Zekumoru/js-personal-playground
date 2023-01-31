import { useEffect, useState } from 'react';

function useDailyEntries() {
  const [entries, setEntries] = useState([]);
  const [vbuckIcon, setVbuckIcon] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = (
      await (await fetch('https://fortnite-api.com/v2/shop/br')).json()
    ).data;

    setVbuckIcon(data.vbuckIcon);
    setEntries(data.daily.entries);
  };

  return [entries, vbuckIcon];
}

export default useDailyEntries;
