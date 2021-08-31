import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learing React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
];


const AllQuotes = () => <QuoteList quotes={DUMMY_QUOTES} />;

export default AllQuotes;