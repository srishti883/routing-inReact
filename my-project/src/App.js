import { Route,Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";






function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      
      
      
    
    </div>
  );
}

export default App;
