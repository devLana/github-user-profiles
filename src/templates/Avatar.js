import React from "react";

const Avatar = props => {
  return (
    <>
      <div className="user__pic">
        {props.img && <img src={props.img} alt={props.user} className="profile-pic" />}
      </div>
      <div className="user__info">
        <h1>{props.user}</h1>
        {props.name && <div className="name">{props.name}</div>}
        {
          props.location && (
            <div className="location">
              <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
              {props.location}
            </div>
          )
        }
      </div>
    </>
  );
};

export default Avatar;
