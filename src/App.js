import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home.jsx";
import News from "./pages/News";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="landing_page">
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/news" element={<News />} />
       </Routes>
     </main>
   </Router>
 );
};

export default App;