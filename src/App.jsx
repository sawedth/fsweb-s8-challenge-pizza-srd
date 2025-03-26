import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Order from './components/Order';
import OrderConf from './components/OrderConf';
import Footer from './components/Footer';
import { useState } from 'react';
import axios from 'axios';



function App() {
  let history = useHistory();
  const [mainUser, setMainUser] = useState();
  const [toppings, setToppings] = useState([])
  const [pizzaValue, setPizzaValue] = useState(0);
  function handleSubmit(event, user, value) {
    event.preventDefault();
    setToppings(user.toppings);
    setPizzaValue(value)
    setMainUser([user.size, user.selectedDough, user.pizzaCounter]);
    axios.post(" https://reqres.in/api/pizza", user).then((response) => {
        console.log(response.data);
        history.push("/orderconf");
    }).catch((error) => {
        console.log(error);
    })

}
  return (
    <>
      <div className='content-selector'>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/order">
            <Order handleSubmit={handleSubmit}/>
          </Route>
          <Route exact path="/orderconf">
            <OrderConf user={mainUser} toppings={toppings} value={pizzaValue}/>
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
