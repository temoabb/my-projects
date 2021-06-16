import React from 'react';
import mealsJpg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = ({ onShowCart }) => {

  return <React.Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsJpg} alt="A table full of meals" />
    </div>
  </React.Fragment>
}


export default Header;