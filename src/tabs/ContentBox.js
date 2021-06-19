import React from "react"
import {Route} from "react-router-dom"
import Tab from "./Tab"
import "../main.scss"
import AgriInputTab from "./AgriInputTab"

const ContentBox = props =>{
    
    return <div className="content-div">
                <Route path="/tab1"><Tab content="Agri-Purchase Management"/></Route>
                <Route path="/tab2"><Tab content="Agri-Input Master Maintenance"/></Route>
                <Route path="/tab3"><Tab content="Supplier Master Maintenance"/></Route>
                <Route exact path={["/tab4","/"]}><AgriInputTab /></Route>
                <Route path="/tab5"><Tab content="Tax-Master Maintenance"/></Route>
            </div>

}

export default ContentBox