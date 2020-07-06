import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
      </div>
    );
  }
}

export default App;
