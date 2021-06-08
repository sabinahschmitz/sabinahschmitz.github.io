
// import logo from './logo.svg';
import './App.css';
import React from 'react';

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      eyecolor: null,
    }
  }
  getNewCharacter(){

    const randomNumber = Math.round( Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          eyecolor: data.eye_color,
          loadedCharacter:true,
      })
    })
  }
 render () {
   return(
     <div>
       {
         this.state.loadedCharacter &&
         <div>
            <h1> {this.state.name}</h1>
            <p> Height: {this.state.height}</p>
            <p> Eye Color: {this.state.eyecolor}</p>
          
         </div>

       }
       
       <button 
       type="button" 
       onClick={() => this.getNewCharacter() } 
       className="btn"> 
       Randomize character
       </button>
     </div>
   )
 }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarWars/>
      </header>
    </div>
  );
}

export default App;
