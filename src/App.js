import React, { useState } from 'react'
import SeeCar from './seeCar';
import AddCar from './addCar';
import Home from './home';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


  
function App() {
  
  const [cars, newCar] = useState([])

  const getCar = (carData) =>{
    newCar(carData)
  }

  const giveCar = () =>{
    return cars
  }

  return (
    <Router>
      <div className='flex-column'>
        <nav className='flex-row'>
          <ul>
            <li>
              <Link to="/addCar">Add a Car</Link>
            </li>
            <li>
              <Link to="/seeCar">See Inventory</Link>
            </li>
          </ul>

        </nav>

        

        <Routes>
          <Route exact path="/addCar" element={<AddCar getCar={getCar} cars={cars}/>}></Route>
          <Route exact path='/seeCar'element={<SeeCar cars={giveCar} />}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
