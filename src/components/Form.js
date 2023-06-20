import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertBook } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const [infos, setinfos] = useState({});
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    setinfos((infos) => ({
      ...infos, item_id: crypto.randomUUID(), [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(insertBook(infos));
    setinfos({});
  }

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          value={infos.title || ''}
          type="text"
          name="title"
          placeholder="Book title"
          onChange={handleChange}
        />

        <input
          value={infos.author || ''}
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>Add BOOk</button>
      </form>
    </section>
  );
}
