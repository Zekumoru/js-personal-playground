import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useQueryItem from '../hooks/useQueryItem';
import '../styles/ItemDetail.scss';

function ItemDetail() {
  const { id } = useParams();
  const item = useQueryItem(id);

  return (
    <div className="ItemDetail">
      <div className="container">
        <h1>{item.notFound ? 'Item not found!' : item.name ?? 'Loading...'}</h1>
        <p>{item.description}</p>
        <div className="image-container">
          <img src={item.images?.icon} alt={item.name} />
        </div>
        <p>{item.introduction?.text}</p>
        <Link className="link" to="/shop">
          Back to shop
        </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
