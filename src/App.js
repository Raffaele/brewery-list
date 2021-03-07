import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BreweryList } from './components/BreweryList/BreweryList';
import { BreweryDetails } from './components/BreweryDetails/BreweryDetails';

function App() {
  return (
    <Container>
      <h1 className="main-title">BREWERIES</h1>
      <Router>
        <Switch>
            <Route exact path="/">
              <BreweryList />
            </Route>
            <Route exact path="/:breweryId">
              <BreweryDetails />
            </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
