import { NavLink } from 'react-router-dom';
import { Fragment } from "react"

const Layout = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <h1>React-router</h1>
          <ul>
            <NavLink to="/quotes">All quotes</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </Fragment>
  )
};


export default Layout;