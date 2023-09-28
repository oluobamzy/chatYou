import React, { useState } from 'react';
import SignupForm from "./components/SignupForm";
import Signin from './components/Signin';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import TopBar from "./components/TopBar";
import ChatApp from './components/ChatApp';

const App = () => {
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isHomePageVisible, setHomePageVisible] = useState(false);
  const handleSignupButtonClick = () => {
    setSignupFormVisible(true);
  };
  const handleLoginButtonClick = () => {
    setLoginFormVisible(true);
    setHomePageVisible(true);

  };
 return (
  <div className="App">
    <ResponsiveAppBar />
    {isSignupFormVisible ? (
        <SignupForm />
      ) : isLoginFormVisible ? (<Signin />
      ) : (
        <TopBar onSignupButtonClick={handleSignupButtonClick} onLoginButtonClick={handleLoginButtonClick} />
      )}
      {isHomePageVisible ? (<ChatApp />) : null}
  </div>
)

};
export default App;