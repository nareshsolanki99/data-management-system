import React from "react"
import "../main.scss"
import {NavLink} from "react-router-dom"

const SideNavBar = () =>{
    
    return (<nav className="nav-items">
        <NavLink className="nav-item item1" activeStyle={{color: "#91C788"}} to="/tab1">Agri-Purchase Management</NavLink>
        <NavLink className="nav-item item2" activeStyle={{color: "#91C788"}} to="/tab2">Agri-Input Master Maintenance</NavLink>
        <NavLink className="nav-item item3" activeStyle={{color: "#91C788"}} to="tab3">Supplier Master Maintenance</NavLink>
        <NavLink className="nav-item item4" activeStyle={{color: "#91C788"}} to="/tab4">Agri-Input Purchase Requests</NavLink>
        <NavLink className="nav-item item5" activeStyle={{color: "#91C788"}} to="/tab5">Tax-Master Maintenance</NavLink>
        <div className="item6"></div>
    </nav>)
}
export default SideNavBar