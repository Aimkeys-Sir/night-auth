import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in">
            <Login/>
        </Route>
        <Route path={"/home"}>
          <Dashboard/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
