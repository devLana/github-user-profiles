import React from "react";

const ShowReposData = ({ reposData, user, reposArr }) => {
  if (reposData.length === 0) {
    return (
      <div className="no--repo">
        <p>
          <strong>{user}</strong> has not created any Github repositories yet.
        </p>
      </div>
    );
  }

  return <div id="repos__container">{reposArr}</div>;
};

export default ShowReposData;
