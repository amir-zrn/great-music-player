import React from "react";
import { Link } from "react-router"
import { Logo } from "../images/logo.png"

const Sidebar = () => {
    return (
        <nav className="gmp-root-navigation">
            <div className="sidebar-container">
                <div className="logo">
                    <Link to="/dashboard" ><img src={Logo} alt="" /></Link>
                </div>
                
            </div>
        </nav>
    )
}