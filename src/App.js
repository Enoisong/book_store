import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksCollection from './components/BooksCollection';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BooksCollection />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
