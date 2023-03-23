import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Welcome!</h2>
      <h3 className="text-lg">Demo Pages</h3>
      <ul>
        <li>
          <Link className="flex gap-1" to="/dynamic-parallel">
            <div>Dynamic Parallel</div>
            <ArrowLongRightIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link className="flex gap-1" to="/dependent-queries">
            <div>Dependent Queries</div>
            <ArrowLongRightIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link className="flex gap-1" to="/paginated-queries">
            <div>Paginated Queries</div>
            <ArrowLongRightIcon className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link className="flex gap-1" to="/infinite-queries">
            <div>Infinite Queries</div>
            <ArrowLongRightIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
