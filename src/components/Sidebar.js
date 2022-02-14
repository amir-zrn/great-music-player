import React from "react";
import Logo from "../images/logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import Library from "../pages/Library";

const Sidebar = (props) => {
    const menuItems = [

    ]
    return (
    <div className={props.className}>
        <nav className="gmp-root-navigation p-4">
            <div className="sidebar-container">
                <div className="logo">
                    <Link to="/dashboard" ><img className="w-40" src={Logo} alt="logo" /></Link>
                    </div>
                    <Router>
                    <ul className="navigation">
                        <li><Link to="/search"> search</Link></li>
                        <li><Link to="/library"> library</Link></li>
                        </ul>
                        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
        </Switch>
                        </Router>
            </div>
        </nav>
    </div>
    )
}

export default Sidebar