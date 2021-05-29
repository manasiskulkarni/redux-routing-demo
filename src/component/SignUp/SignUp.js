import React from "react";
import SignCss from "./SignUp.module.css";
import Aux from "../../HOC/Auxe";

const signup = (props) => {
  return (
    <Aux>
      <div className={SignCss.Sign}>
        {/* <div className={SignCss.Header}>
          <div className={SignCss.Item}>
            <div class="col-md-5" ><NavLink to='/' exact  >Home</NavLink></div>

            <div class="col-md-7 "><NavLink to='/next' >NextPage</NavLink></div>
          </div>
        </div> */}
        <div className={SignCss.Body}>
          <form class="row g-3 needs-validation" >
            <div class="col-md-12 position-relative" className={SignCss.Margin}>
              <input
                type="text"
                class="form-control"
                id="validationTooltip02"
                placeholder="Username"
                value={props.username}
                onChange={(e) => props.changeUsername(e.target.value)}
                required
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>

            <div class="col-md-12 position-relative" className={SignCss.Margin}>
              <input
                type="text"
                class="form-control"
                id="validationTooltip03"
                placeholder="City"
                value={props.city}
                onChange={(e) => props.changeCity(e.target.value)}
                required
              />
              <div class="invalid-tooltip">Please provide a valid city.</div>
            </div>
            <div class="col-md-12 position-relative" className={SignCss.Margin}>
              <select
                class="form-select "
                id="validationTooltip04"
               
                onChange={(e) => props.changeState(e.target.value)}
                required
              >
                <option>Arunachal Pradesh</option>
                <option>Chattisghar</option>
                <option>Gujarat</option>
                <option>Karnataka</option>
                <option>Meghalaya</option>
                <option>Tripura</option>
              </select>
            </div>

            <div class="invalid-tooltip">Please select a valid state.</div>

            <div class="col-md-12 position-relative" className={SignCss.Margin}>
              <input
                type="text"
                class="form-control"
                id="validationTooltip05"
                placeholder="Zip Code"
                value={props.zipcode}
                onChange={(e) => props.changedZipcode(e.target.value)}
                required
              />
              <div class="invalid-tooltip">Please provide a valid zip.</div>
            </div>

            <div class="col-md-12 position-relative" className={SignCss.Margin}>
              <input
                type="text"
                class="form-control"
                id="validationTooltip05"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.changePassword(e.target.value)}
                required
              />
              <div class="invalid-tooltip">
                Please provide a valid password.
              </div>
            </div>

            <div class="col-12 position-relative" className={SignCss.Button}>
              <button
                class="btn btn-outline-primary"
                type="submit"
                onClick={()=>props.submit()}
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </Aux>
  );
};

export default signup;
