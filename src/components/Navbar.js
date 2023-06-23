import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center container mx-auto py-8">
      <div className="text-3xl text-gray-600 capitalize font-bold">
        <Link to="/">Bookstore </Link>
      </div>
      <nav className="flex gap-8">
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">category</NavLink>
      </nav>
    </div>
  );
}
