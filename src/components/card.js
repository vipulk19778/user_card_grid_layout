import React, { useContext } from "react";
import "../styles/card_style.css";
import { Context } from "../../src/context/PassContext.js";

import { ColorRing } from "react-loader-spinner";

export const Card = () => {
  const { users, showText } = useContext(Context);

  return (
    <div className="card-list">
      {users.length !== 0 ? (
        users.map((data) => (
          <div key={data.id} className="card-main">
            <div className="avatar-container">
              <img src={data.avatar} alt={data.first_name} />
            </div>
            <div className="name">
              Name- {data.first_name}&nbsp;{data.last_name}
            </div>
            <div className="email">Email- {data.email}</div>
          </div>
        ))
      ) : (
        <div className="loader">
          {showText ? (
            <h2>Please click the Get Users button to get the data.</h2>
          ) : (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          )}
        </div>
      )}
    </div>
  );
};
