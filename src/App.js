import React from 'react';
import Home from './Home/Home';
import Inicio from './Inicio_Sesion/Inicio';

class App extends React.Component {

  
  render(){
      return (
        <div className="app">
          <Home />
          <Inicio />
        </div>
      );
      }
}

export default App;
