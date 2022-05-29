import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/login/Login.component";
import DashboardComponent from "./components/dashboard/Dashboard.component";
import TicketComponent from "./components/Ticket/Ticket.component";
import NavMenuComponent from "./components/NavMenu/NavMenu.component";

function App() {
  const [isSignedIn, setSignedIn] = useState(
    localStorage.getItem("login") != null
  );
  return (
    <div className="App">
      <NavMenuComponent isSignedIn={isSignedIn} setSignedIn={setSignedIn} />
      <div className="nav_items">
        <switch>
          <Routes>
            {!isSignedIn ? (
              <Route
                path="/"
                exact
                element={<LoginComponent setSignedIn={setSignedIn} />}
              />
            ) : (
              <Route
                path="/"
                element={<DashboardComponent setSignedIn={setSignedIn} />}
              />
            )}
            <Route exact path="/tickets" element={<TicketComponent />} />
          </Routes>
        </switch>
      </div>
    </div>
  );
}

export default App;
