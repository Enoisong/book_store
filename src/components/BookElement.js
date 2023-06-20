import React from 'react';
import PropTypes from 'prop-types';

export default function BookElement({ booktitle, bookauthor, deleteBook }) {
  return (
    <div className="container">
      <div>
        <h2>
          {booktitle}
        </h2>
        <p>
          By
          (
          {bookauthor}
          )
        </p>
        <button type="button" onClick={deleteBook}>Remove</button>
      </div>
    </div>
  );
}

BookElement.propTypes = {
  booktitle: PropTypes.string.isRequired,
  bookauthor: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};
