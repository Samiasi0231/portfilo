import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./Components/Portfoli/IndexPage";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []); 

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <BrowserRouter>
      <Routes>
         <Route
          path="/"
          element={
            <>
           <IndexPage currentTime={currentTime}/>
            </>
          }
        />
    
         </Routes>
    </BrowserRouter>
  );
}

export default App;

