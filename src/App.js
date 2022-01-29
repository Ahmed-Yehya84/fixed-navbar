import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Client from "./pages/Clients";
import Coworkers from "./pages/Coworkers";
import Analytics from "./pages/Analytics";
import Header from "./components/Header";

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
        <Header showLinks={showLinks} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/coworkers" element={<Coworkers />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
