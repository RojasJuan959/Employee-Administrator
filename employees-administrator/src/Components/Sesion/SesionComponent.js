import { useContext } from "react";
import { FireContext } from "../../Context/FireContext.js";
import { useNavigate } from 'react-router-dom';

import "./SesionComponent.css";

const SesionComponent = () => {
  const { dbData } = useContext(FireContext);

  const navigate = useNavigate();

  const validateSession = () => {
    let username = document.getElementsByClassName("loginInputName")[0].value;
    let password =
      document.getElementsByClassName("loginInputPassword")[0].value;

    if (username === dbData[2].name && password === dbData[2].password) {
        navigate('/Home');
    }
    else {
        alert('Usuario/Password Incorrecto(s)');
    }
  };

  return (
    <div className="pageLoginBase">
      <div className="loginBase">
        <p className="loginBaseTitle">Employee Administrator</p>
        <p className="loginBaseSubTitle">Login</p>
        <label className="loginInputLabel">
          Username <input type={"text"} className="loginInputName"></input>
        </label>
        <label className="loginInputLabel">
          Password{" "}
          <input type={"password"} className="loginInputPassword"></input>
        </label>
        <button className="loginButton" onClick={() => {validateSession()}}>Login</button>
      </div>
    </div>
  );
};

export default SesionComponent;
