import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/ui/Layout";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

import "./styles.css";

export default function App() {
  console.log('App');
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes" component={AllQuotes} />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />

        {/* <Route path="*" component={} /> */}
      </Switch>
    </Layout>
  );
}