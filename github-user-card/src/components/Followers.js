import React from "react";
import { Nav, NavLink } from 'reactstrap';
import "./styles.css";


function Followers(props) {
  return (
    <div className="followers-card-container">
      <h2>Followers</h2>
      {props.followers.map(follower => (
        <div>
          <img 
          className="followers-card-image"
          top width="100%" 
          src={follower.avatar_url} 
          alt={follower.login} 
          />
          <div className="card-details-container">
            <h3>{follower.login}</h3>
            <Nav>
              <NavLink className="github-url" href={follower.html_url} target="_blank">
                Github URL
              </NavLink>
            </Nav>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Followers; 