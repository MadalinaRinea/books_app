import React  from 'react';
import {  NavLink } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>My Books</h1>
      <p>There is no friend as loyal as a book</p>
      <hr />
      {/* <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
        <NavLink NavLink className="nav-link" exact to="/login">Login</NavLink>
      </div> */}

      <nav className="navbar navbar-expand navbar-dark bg-primary" >
            {/* <Link className="navbar-brand" to="/">My Books</Link> */}
            <hr/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav w-100 ">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Books List <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item mr-auto">
                        <NavLink className="nav-link mr-auto" exact to="/add">Add Book </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
       </nav>

    </header>
  );
};


export default Header;