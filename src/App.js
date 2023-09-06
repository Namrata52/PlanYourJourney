
import { useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import data from './data';
const App = () => {
   
  const[tours,setTour] =useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTour(newTour);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>  
        <button onClick={() => setTour(data)} className='btn-white'>Refresh</button>
      </div>
    );
  }
  return(
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
