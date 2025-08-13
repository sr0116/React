import React , {useState} from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";


function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ?  <LogoutButton onClick={handleLogoutClick} />  : <LoginButton onClick={handleLoginClick} />}
    </div>
  )
}
export default LoginControl;
