import logo from './logo.svg';
import './App.css';

import View from './Componnts/View';
import ButtonAppBar from './Componnts/Navbar';
import Navbar from './Componnts/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './Componnts/Add';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/add' element={
      <Add data={{id:'',name:'',grade:''}} method="post"/>}/>

    </Routes>

    </div>
  );
}

export default App;
