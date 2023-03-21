import { useState, useEffect } from "react";
import LoginDecoration from "./LoginDecoration";
import { Input } from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <LoginDecoration left="left" />
      <div className="form">
        <div className="title">
          <h1>
            <span className="title1">Mega </span>
            <span className="title2">Cart</span>
          </h1>
        </div>
        <div className="cart">
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78045/shopping-cart-clipart-md.png"
            alt="cart"
          />
        </div>
        <h1 className="login">Login</h1>
        <form action="" method="post" className="mainform">
          <div className="inputs">
                      <div class="mb-3">
                          <br />
                          <br/>
              <label for="exampleFormControlInput1" class="form-label">
                Email address:
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <PasswordInput />
          </div>
        </form>
      </div>
      <LoginDecoration right="right" />
    </div>
  );
};

export default Login;
