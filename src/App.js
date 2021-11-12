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
  topping1: false,
  topping2: false,
  special: ''
}

const initialError = {
  name: '',
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
      topping1: orderValues.topping1,
      topping2: orderValues.topping2,
      special: orderValues.special.trim()
    }
    return record
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
