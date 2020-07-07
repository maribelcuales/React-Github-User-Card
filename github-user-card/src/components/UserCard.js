import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./styles.css";


function UserCard(props) {
  return (
    <div className="card-image-container">
      <img 
        className="card-image"
        top width="100%" 
        src={props.githubUser.avatar_url} 
        alt={props.githubUser.name} 
      />
      <div className="card-details-container">
        <h3>{props.githubUser.name}</h3>
        <p>{props.githubUser.login}</p>
        <p>{props.githubUser.bio}</p>

        <Nav>
          <NavLink className="github-url" href={props.githubUser.html_url} target="_blank">
            Github URL
          </NavLink>
        </Nav>
      </div>
    </div>
  );
}

export default UserCard; 