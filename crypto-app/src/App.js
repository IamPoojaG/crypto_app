import './App.css';
import './common/style/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/market' exact />
        <Route path='/exchange' exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
