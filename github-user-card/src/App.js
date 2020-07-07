import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";

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
    axios.get("https://api.github.com/users/maribelcuales/followers")
    .then(response => {
      console.log("Getting Followers!", response);
      this.setState({
        followers: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Github User Card</h1>
        </div>
        <div className="cards-container">
          <UserCard githubUser={this.state.githubUser}/>
          <Followers followers={this.state.followers}/> 
        </div>
      </div>
    );
  }
}

export default App;
