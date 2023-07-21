import { Routes, Route } from 'react-router-dom'

import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Create from './views/Create/Create';
import Landing from './views/landing/Landing';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../src/redux/actions';


import style from '../src/App.module.css';


function App() {

  //* funcion utilizada para enviar acciones a los reducers
  const dispatch = useDispatch();

  //* funcion utilizada para acceder al estado global que esta en el store
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
    
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/home/:id' element={<Detail />}/>
      <Route path='/create' element={<Create allCountries={allCountries}/>}/>
    </Routes>
  )
}

export default App
 