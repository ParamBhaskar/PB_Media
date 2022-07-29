import Navbar from './Navbar';
import DashBoard from './DashBoard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path= "/">
        <DashBoard />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
