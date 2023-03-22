import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RQSuperheroes from './pages/RQSuperheroes';
import Superheroes from './pages/Superheroes';

function App() {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 mt-0 bg-slate-300 p-4 shadow dark:bg-slate-800">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<Superheroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperheroes />} />
      </Routes>
    </div>
  );
}

export default App;
