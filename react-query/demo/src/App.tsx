import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
      </Routes>
    </div>
  );
}

export default App;
