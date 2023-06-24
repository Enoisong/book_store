import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <header>
      <div className={styles['nav-wrapper']}>
        <h2>Bookstore CMS</h2>
        <nav>
          <ul className={styles['nav-links']}>
            <li>
              <NavLink to="/">BOOKS</NavLink>
            </li>
            <li>
              <NavLink to="/categories">CATEGORIES</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles['nav-icon']}>
        <img src="https://s3.amazonaws.com/pix.iemoji.com/andr33/0497.png" alt=" " />
      </div>
    </header>
  );
}
