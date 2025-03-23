import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import {Switch, Route, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Layout.css';
import Main from './components/Main';
import Order from './components/Order';
import OrderConf from './components/OrderConf';

function App() {
  

  return (
    <>
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
      <Footer />
    </>
  )
}

export default App
