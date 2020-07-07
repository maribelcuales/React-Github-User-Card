import React from "react";

function UserCard(props) {
  return (
    <div>
      <img src={props.githubUser.avatar_url} alt={props.githubUser.name}/>
      <h3>Name: {props.githubUser.name}</h3>
      <p>Login: {props.githubUser.login}</p>
      <p>Bio: {props.githubUser.bio}</p>
      <p>Github URL: {props.githubUser.url}</p>
    </div>
  );
}

export default UserCard; 