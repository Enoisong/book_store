// eslint-disable
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

export default function Book(props) {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="books">
        <span>{category}</span>
        <span>{title}</span>
        <span>
          {' '}
          {author}
        </span>
        <div className="buttons">
          <button>Edit</button>
          <button
            onCli
            clsck={() => dispatch(deleteBook(id))}
            className="btn"
            id={id}
            type="button"
          >
            remove
          </button>
          <button>Edit</button>

        </div>
      </div>
      <div className="progress">
        <div className="bar">
          <CircularProgressbar value={80} />
        </div>
        <div className="percentage">
          <p>80%</p>
          <p>completed</p>
        </div>
      </div>
      <div className="chapters">Chapter 7</div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
