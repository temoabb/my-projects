import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = ({ id, text, author }) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}/`} className='btn'>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;
