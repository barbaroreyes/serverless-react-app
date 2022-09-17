import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      Header
      <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
