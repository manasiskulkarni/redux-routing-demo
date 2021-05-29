import React from "react";
import NextCss from "./NextPage.module.css";

const next = (props) => {
  return (
    <div>
      <div className={NextCss.Next}>
        <div class="card" style={{ width: "26rem", height: "14rem" }}>
          <div class="card-body">
            <p class="card-text">Username:</p>
            <p class="card-text">City:</p>
            <p class="card-text">State:</p>
            <p class="card-text">Zip Code:</p>
            <p class="card-text">Password:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default next;
