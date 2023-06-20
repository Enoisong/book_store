import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import BookElement from './BookElement';

export default function BooksItemList() {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none' }}>
      {books.map((book) => (
        <li key={book.item_id}>
          <BookElement
            booktitle={book.title}
            bookauthor={book.author}
            deleteBook={() => dispatch(deleteBook(book.item_id))}
          />
        </li>
      ))}
    </ul>
  );
}
