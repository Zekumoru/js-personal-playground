import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import ItemDetail from './ItemDetail';
import Nav from './Nav';
import Profile from './Profile';
import Shop from './Shop';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/:id" element={<ItemDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
