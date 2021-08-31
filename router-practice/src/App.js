import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';

function App() {

  // Layout => <Fragment> MainNavigation, <main>{children}</main> </Fragment>

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes" component={AllQuotes} />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />

        {/* if no other routes match up to this point:  */}
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;