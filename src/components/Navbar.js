import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { setGroupBy, setSortBy } = useContext(AppContext);

  return (
    <nav className='head'>
      <label>Group By:</label>
      <select onChange={(e) => setGroupBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="status">Status</option>
        <option value="userId">User</option>
      </select>
      <label>Sort By:</label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </nav>
  );
};

export default Navbar;
