import React from 'react';
import Book from './Book';
import Form from './Form';

const arrayofBooksInfo = [
  {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
  },
  {
    title: 'Gulliver Travels',
    author: 'Swift, Jonathan',
  },

  {
    title: 'The Lonely Londoners',
    author: 'Samuel Selvon',
  },
];

const assignmentLooper = (a) => {
  const books = <Book title={a.title} author={a.author} />;
  return books;
};

const Books = () => (
  <div>
    {arrayofBooksInfo.map((i) => assignmentLooper(i))}
    <Form />
  </div>
);

export default Books;
