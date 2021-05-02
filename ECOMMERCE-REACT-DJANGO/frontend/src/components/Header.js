import React from 'react';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" collapseonselect="true">

        <Container>
          <LinkContainer to='/'>
            <span className="navbar-brand">ProShop</span>
          </LinkContainer>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <LinkContainer to='/cart'>
                  <span className="nav-link" aria-current="page">
                    <i className="fas fa-shopping-cart"></i> CART
                  </span>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to='/login'>
                  <span className="nav-link" aria-current="page">
                    <i className="fas fa-user"></i> Login
                  </span>
                </LinkContainer>
              </li>
            </ul>
          </div>
        </Container>

      </nav>
    </header >
  )
}

export default Header;
