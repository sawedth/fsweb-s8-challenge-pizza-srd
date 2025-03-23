import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Order from './components/Order';
import OrderConf from './components/OrderConf';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='content-selector'>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/orderconf">
            <OrderConf />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
