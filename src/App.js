import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SideNavigation from "./components/SideNavigation";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function BasicExample() {
  return (
    <Router>
      <div id="app-container" className="ltr menu-default menu-sub-hidden">
        <Header />
        <SideNavigation />
        <main className="default-transition">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>{" "}
            <Route path="/home">
              <Dashboard />
            </Route>{" "}
            <Route path="/about">
              <About />
            </Route>{" "}
            <Route path="/contact">
              <Contact />
            </Route>{" "}
            <Route path="/dashboard">
              <Dashboard />
            </Route>{" "}
          </Switch>{" "}
        </main>
      </div>{" "}
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2> About </h2>{" "}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2> Contact </h2>{" "}
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div>
//       <h2> Dashboard </h2>{" "}
//     </div>
//   );
// }
