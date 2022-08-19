import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listestation from "./pages/Listestation";
import Detailstation from "./pages/Detailstation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Liststation" element={<Listestation />} >
          <Route path=":id" element={<Detailstation />} />
        </Route>
        <Route path="/DetailStation/:id" element={<Detailstation />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
    
  );
};

export default App;
