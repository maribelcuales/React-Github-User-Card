import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/maribelcuales")
    .then(response => {
      console.log(response);
      this.setState({
        user: response.data
      })
    });
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
