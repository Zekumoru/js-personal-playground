import React from 'react';
import '../styles/Shop.scss';
import { Link } from 'react-router-dom';
import useDailyEntries from '../hooks/useDailyEntries';

function Shop() {
  const [entries, vbuckIcon] = useDailyEntries();

  return (
    <div className="Shop">
      <div className="container">
        <h1>Shop</h1>
        {entries.length === 0 && <p>Loading...</p>}
        {entries.length !== 0 && (
          <ul className="entries-list">
            {entries.map((entry) => {
              let name = entry.devName;

              const startIndex = name.indexOf(']');
              if (startIndex >= 0) name = name.substring(startIndex + 1);

              const endIndex = name.indexOf(' for ');
              if (endIndex >= 0) name = name.substring(0, endIndex);

              return (
                <li key={entry.devName}>
                  <h2>{name}</h2>
                  <div className="price">
                    <img className="icon" src={vbuckIcon} alt="vbuck" />
                    <p className="price">{entry.regularPrice} </p>
                  </div>
                  <h3>Items</h3>
                  <ul className="items-list">
                    {entry.items.map((item) => {
                      return (
                        <Link to={`/shop/${item.id}`} key={item.id}>
                          <li>
                            <img src={item.images.icon} alt={item.name} />
                            <h4>{item.name}</h4>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Shop;
