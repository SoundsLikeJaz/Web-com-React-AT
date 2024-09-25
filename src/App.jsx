import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import { Ex1_1, Ex1_2, Ex1_3, Ex1_4, Menu1 } from "./exercises/Ex1";
import { Ex2_1, Ex2_2, Ex2_3, Ex2_4, Menu2 } from "./exercises/Ex2";
import { Ex3_1, Ex3_2, Ex3_3, Ex3_4, Menu3 } from "./exercises/Ex3";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise1" element={<Menu1 />} />
          <Route path="/exercise11" element={<Ex1_1 />} />
          <Route path="/exercise12" element={<Ex1_2 />} />
          <Route path="/exercise13" element={<Ex1_3 />} />
          <Route path="/exercise14" element={<Ex1_4 />} />

          <Route path="/exercise2" element={<Menu2 />} />
          <Route path="/exercise21" element={<Ex2_1 />} />
          <Route path="/exercise22" element={<Ex2_2 />} />
          <Route path="/exercise23" element={<Ex2_3 />} />
          <Route path="/exercise24" element={<Ex2_4 />} />

          <Route path="/exercise3" element={<Menu3 />} />
          <Route path="/exercise31" element={<Ex3_1 />} />
          <Route path="/exercise32" element={<Ex3_2 />} />
          <Route path="/exercise33" element={<Ex3_3 />} />
          <Route path="/exercise34" element={<Ex3_4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
