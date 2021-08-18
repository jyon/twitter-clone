
import { React, useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setInit(true);
    });
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </>
  );
}

export default App;
