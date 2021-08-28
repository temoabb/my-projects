import { Fragment } from "react";
import { useParams, Route } from "react-router";
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Detailed Quote!</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </Fragment>
  )
};

export default QuoteDetail;