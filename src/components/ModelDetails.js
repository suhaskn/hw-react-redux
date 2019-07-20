import * as React from 'react'

class ModelDetails extends React.Component {
  render() {
    return (<div>
      <ul>
        <li>{this.state.name}</li>
        <li>{this.state.manufacturer}</li>
        <li>{this.state.year}</li>
        <li>{this.state.origin}</li>
      </ul>
  </div>)
  }
}

function getModel(model) {
 this.state = model;
}
