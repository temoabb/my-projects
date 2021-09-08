import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';

const QuoteItem = ({ author, title, quoteId }) => {
  console.log('QuoteItem');
  return (
    <li className={classes.singlequote}>
      <div>
        <h2>{title}</h2>
        <h5>{author}</h5>
      </div>
      <Link to={`/quotes/${quoteId}`}>View fullscreen</Link>
    </li>
  )
};


export default QuoteItem;