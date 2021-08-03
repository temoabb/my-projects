import classes from './Card.module.css';

const Card = ({ children }) => <div className={classes.card}>{children}</div>;

export default Card;
