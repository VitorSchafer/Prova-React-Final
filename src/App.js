import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from '../src/pages/LandingPage'
import PaginaErro from '../src/PaginaErro'
import Login from '../src/pages/Login'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="*" component={PaginaErro} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
