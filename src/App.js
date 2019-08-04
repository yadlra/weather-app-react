import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY ="f011724912ca210c9f553a2894282145";

class App extends React.Component {
  
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
