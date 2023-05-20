import './App.css';
import { useState } from 'react';
import Input from './components/Input/Input';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  const [list, setList] = useState([]);
  const [placesList, setPlacesList] = useState([]);

  const handleAddItem = (text) => {
    setList((prevList) => [...prevList, text]);
    setPlacesList((prevPlacesList) => {
      if (!prevPlacesList.includes(text.place)) {
        return [...prevPlacesList, text.place];
      }
      return prevPlacesList;
    });

  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input onAdd={handleAddItem} prevList = {placesList}/>
      
      {
        list.map((item, index) => (
          <WeatherCard weatherData={item} />
        ))
      }
    </div>
  );
}

export default App;
