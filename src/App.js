import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CateogoriesPage';

const dummyList = [{
  id: 1, title: 'Things Fall Apart', author: 'Chinua Achebe',
}, {
  id: 2, title: 'Gulliver Travels', author: 'Swift, Jonathan',
}, {
  id: 3, title: 'The Lonely Londoners', author: 'Samuel Selvon',
}];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage bookList={dummyList} />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}
export default App;
