import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
   

    render() {
        const navLinks = this.props.names.map(function(name){
            return <NavLink to={`/dogs/${name}`}>{name}</NavLink>
        })


    return (
        <nav>
            <NavLink to='/dogs'>Home</NavLink>
            {navLinks}
        </nav>
    );
    }
}

export default NavBar;