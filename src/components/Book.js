// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

export default function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="py-1 flex justify-between">
      <span>{title}</span>
      <span>
        by :
        {author}
      </span>
      <span>{category}</span>
      <button
        onClick={() => dispatch(deleteBook(id))}
        className="big-gray-200 p-1"
        id={id}
        type="button"
      >
        remove
      </button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
