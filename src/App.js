import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY ="f011724912ca210c9f553a2894282145";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Southampton,uk&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
  }
  render() {
    return (
      <div>
      <Titles />
      <Form />
      <Weather />
      </div>
    );
  }
};

export default App;
