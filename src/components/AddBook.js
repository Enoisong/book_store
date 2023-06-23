import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Math.random().toString().substr(2, 6),
      title,
      author,
      category: 'fiction',
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="container flex items-center justify-betweem gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        className="bg-gray-100 w-full"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
        className="bg-gray-100 w-full"
      />
      <button onClick={handleSubmit} className="text-right text-gray-600" type="submit">
        AddBook
      </button>
    </form>
  );
}
