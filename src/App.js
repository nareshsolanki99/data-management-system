import React from 'react'
import "./main.scss"
import SideNavBar from './components/SideNavBar'
import ContentBox from './tabs/ContentBox'
import {BrowserRouter} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <SideNavBar />
          <ContentBox />
        </div>
    </BrowserRouter>
  );
}

export default App;
