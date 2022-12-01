import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCityChange = useCallback(city => {
    console.log(city)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0901dac43ab2dd08220f06d64d1a0920&units=metric`)
    
   .then(res => res.json())
   .then(data => {
     console.log(data);
   });

  }); 

  return (
    <section>
      <PickCity action={handleCityChange}/>
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;