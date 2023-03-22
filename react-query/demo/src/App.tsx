import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.page';
import RQSuperheroes from './components/RQSuperheroes.page';
import Superheroes from './components/Superheroes.page';

function App() {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 mt-0 bg-slate-300 p-4 shadow">
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
