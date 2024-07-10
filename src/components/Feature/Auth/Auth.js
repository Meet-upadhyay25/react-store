import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <section>
      {isSignUp ? (
        <SignUp handleSignUp={handleSignUp} />
      ) : (
        <Login handleSignUp={handleSignUp} />
      )}
    </section>
  );
};

export default Auth;
