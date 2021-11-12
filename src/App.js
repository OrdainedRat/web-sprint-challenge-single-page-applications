import React, { useState } from "react";
import { Route } from "react-router";
import Home from "./Components/Home";
import Order from "./Components/Order";
import orderSchema from "./orderSchema";
import * as yup from 'yup'
import axios from "axios";

const initialOrderValues = {
  name: '',
  size: '',
  pepperoni: false,
  ham: false,
  bananaPeppers: false,
  onions: false,
  special: ''
}

const initialError = {
  name: '',
  size: '',
  special: ''
}
  


const App = () => {
  
  const [orderValues, setOrderValues] = useState(initialOrderValues)
  const [errors, setErrors] = useState(initialError)
  const [record, setRecord] = useState([])

  const validate = (name, value) => {
    yup.reach(orderSchema, name).validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const postRecord = (record) => {
    axios.post('https://reqres.in/api/orders', record)
    .then(res => {
     setRecord([res.data], ...record)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      setOrderValues(initialOrderValues)
    })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setOrderValues({ ...orderValues, [name]: value})
  }

  const inputSubmit = () => {
    const record = {
      name: orderValues.name.trim(),
      size: orderValues.size,
      pepperoni: orderValues.pepperoni,
      ham: orderValues.ham,
      bananaPeppers: orderValues.bananaPeppers,
      onions: orderValues.onions,
      special: orderValues.special.trim()
    }
   postRecord(record)
  }

  return (
    <>
      <h1>Welcome To Lambda Eats!</h1>
      
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/pizza'>
        <Order values={orderValues} errors={errors} submit={inputSubmit} change={inputChange} />
      </Route>
    </>

  
  );
};
export default App;
