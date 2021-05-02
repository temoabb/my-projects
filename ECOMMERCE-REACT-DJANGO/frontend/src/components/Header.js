import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" collapseonselect="true">
        <Container>

          <div className="container-fluid">
            <a className="navbar-brand" href="/">ProShop</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/cart"><i className="fa fa-shopping-cart"></i> Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login"><i className="fa fa-user"></i> Login</a>
                </li>
              </ul>
            </div>
          </div>

        </Container>
      </nav>
    </header>
  )
}

export default Header;
