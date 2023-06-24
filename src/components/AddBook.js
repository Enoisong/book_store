import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from '../styles/AddBook.module.css';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBook({ title, author, category }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className={style['form-container']}>
      <h2>ADD NEW BOOK</h2>
      <form className={style['add-form']}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book author"
          required
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option hidden value="" disabled selected>
            Category
          </option>
          <option value="Religious">Religious</option>
          <option value="Engineering">Engineering</option>
          <option value="Humanities">Humanities</option>
          <option value="Fiction">Fiction</option>
          <option value="Programming">Programming</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
