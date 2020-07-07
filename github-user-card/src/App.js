import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/maribelcuales")
    .then(response => {
      console.log(response);
      this.setState({
        githubUser: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard githubUser={this.state.githubUser}/>
      </div>
    );
  }
}

export default App;
