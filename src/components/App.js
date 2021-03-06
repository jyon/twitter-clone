
import { React, useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setInit(true);
      setUserObj(user);
    });
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/>
    </>
  );
}

export default App;
