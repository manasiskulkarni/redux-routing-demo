import React from "react";
import HeaderCss from "./Header.module.css";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <div>
      <div className={HeaderCss.Header}>
        <div className={HeaderCss.Item}>
          <div class="col-md-5">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </div>

          <div class="col-md-7 ">
            <NavLink to="/next">NextPage</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
