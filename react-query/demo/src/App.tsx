import { Link, Route, Routes } from 'react-router-dom';
import DependentQueries from './pages/DependentQueries';
import DynamicParallel from './pages/DynamicParallel';
import Home from './pages/Home';
import InfiniteQueries from './pages/InfiniteQueries';
import PaginatedQueries from './pages/PaginatedQueries';
import RQSuperhero from './pages/RQSuperhero';
import RQSuperheroes from './pages/RQSuperheroes';
import Superheroes from './pages/Superheroes';

function App() {
  return (
    <div>
      <nav>
        <ul className="mt-0 flex gap-4 bg-slate-300 p-4 shadow dark:bg-slate-800">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/superheroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-superheroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superheroes" element={<Superheroes />} />
        <Route path="/rq-superheroes" element={<RQSuperheroes />} />
        <Route path="/rq-superheroes/:heroId" element={<RQSuperhero />} />
        <Route
          path="/dynamic-parallel/"
          element={<DynamicParallel heroesIds={[1, 3]} />}
        />
        <Route
          path="/dependent-queries"
          element={<DependentQueries username="zekumoru" />}
        />
        <Route path="/paginated-queries" element={<PaginatedQueries />} />
        <Route path="/infinite-queries" element={<InfiniteQueries />} />
      </Routes>
    </div>
  );
}

export default App;
