import QuoteList from '../components/quotes/QuoteList';
// import { DUMMY_DATA } from '../dummy-data';


const DUMMY_DATA = [
  {
    id: 'b1',
    title: 'Harry Potter and Deathly Hallows part 1',
    author: 'J.K. Rowling'
  },
  {
    id: 'b2',
    title: 'Harry Potter and Deathly Hallows part 2',
    author: 'J.K. Rowling'
  },
  {
    id: 'b3',
    title: 'Lord of the Rings the fellowship of the Ring',
    author: 'J.R.R. Tolien'
  },
  {
    id: 'b4',
    title: 'Lord of the Rings the return of the King',
    author: 'J.R.R. Tolien'
  },
];

const AllQuotes = () => {
  console.log('AllQuotes');
  return (
    <QuoteList data={DUMMY_DATA} />
  );
}


export default AllQuotes;