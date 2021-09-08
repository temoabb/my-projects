import { NavLink } from 'react-router-dom';
import { Fragment } from "react";
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink className={classes.mainpage} to="/">Router</NavLink>
        <nav>
          <ul>
            <li><NavLink className={classes.navlink} activeClassName={classes.active} to="/quotes">All quotes</NavLink></li>
            <li><NavLink className={classes.navlink} activeClassName={classes.active} to="/new-quote">Create quote</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </Fragment>
  )
};


export default Layout;