import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PasswordInput.css";

function PasswordInput() {
    const [show, setShow] = React.useState(false);
    const handleClick = (e) => { setShow(!show); e.preventDefault();} 

  return (
    <div className="password">
      <div class="mb-3 row">
        <label for="inputPassword" class="form-label">
          Password:
        </label>
        <div className="buttoncontainer">
          <div class="col-mb-15 row">
            <input type={show?"text":"password"} class="form-control" id="inputPassword" />
          </div>
          <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
        </div>
      </div>
      {/* <InputRightElement width="4.5rem"> */}
      {/* </InputRightElement> */}
    </div>
  );
}

export default PasswordInput;
