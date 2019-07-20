import React from 'react';
import './App.css';

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]


class App extends React.Component {

  constructor(props){
    super(props)
     this.state = {value: null}

   }

  updateSelection = (event) => {
    
    this.setState({Model: event.target.value})  
    console.log(this.state)
}

   render() {
    return (
      <div className="App">

        <select value={this.state.value} onChange={this.updateSelection} >
          <option value="">-- pick a model --</option>
          {data.map(model => 
            <option value={model.name}>{`${model.name} (${model.year})`}</option>)}
        </select>

      </div>
    );
  }
}

export default App;
