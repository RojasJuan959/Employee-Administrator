import { useContext } from "react";
import { FireContext } from "../../Context/FireContext.js";

import "./SesionComponent.css";

const SesionComponent = () => {

  const { dbData } = useContext(FireContext);
  console.log(dbData);

  const validateSession = () => {

    let username = document.getElementsByClassName("loginInputName")[0].value;
    let password = document.getElementsByClassName("loginInputPassword")[0].value;

    
  }

  return (
    <div className="pageLoginBase">
      <div className="loginBase">
        <p className="loginBaseTitle">Employee Administrator</p>
        <p className="loginBaseSubTitle">Login</p>
        <label className="loginInputLaber">
          Username <input type={"text"} className="loginInputName"></input>
        </label>
        <label className="loginInputLaber">
          Password{" "}
          <input type={"password"} className="loginInputPassword"></input>
        </label>
        <button className="loginButton">Login</button>
      </div>
    </div>
  );
};

export default SesionComponent;
