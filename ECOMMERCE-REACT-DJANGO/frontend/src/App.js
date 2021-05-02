import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
