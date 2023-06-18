import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="theForm">
      <div className="blur one"></div>
      <div className="blur two"></div>
      <div className="blur three"></div>
      <div className="login">
        <form className="log">
          <h2>Login</h2>
          <div>
            <label>Email</label>
            <input type="text" className="input"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="input"></input>
          </div>
          <button>Submit</button>
          <div>
            <div>Don't have an account? </div>
            <a href="#"> SignUp</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
