import React,{useState} from 'react'
import "../main.scss"
import AgriContentBox from "./AgriContentBox"
import Tab from "./Tab"
const AgriInputTab = () =>{
    
    const [executing,setExecuting] = useState(true);
    const [pending,setPending] = useState(false);
    const [executed,setExecuted] = useState(false);
    const [completed,setCompleted] = useState(false);
    
    const setDefaultState = () =>{
        setPending(false);
        setExecuted(false);
        setCompleted(false);
        setExecuting(false);
    }
    return <div className="data-container">
            <header className="header-container">
                <h3>Agri-Input Master Maintenance</h3>
                <nav className="agri-input-nav">
                <ul>
                    <li className={pending?"selected-tab":""} onClick={()=> {setDefaultState(); setPending(true)}}>Pending</li>
                    <li className={executing?"selected-tab":""}  onClick={()=> {setDefaultState(); setExecuting(true)}}>Executing</li>
                    <li className={executed?"selected-tab":""} onClick={()=> {setDefaultState(); setExecuted(true)}}>Executed</li>
                    <li className={completed?"selected-tab":""} onClick={()=> {setDefaultState(); setCompleted(true)}}>Completed</li>
                </ul>
                </nav>
            </header>
            <main>
                {executing && <AgriContentBox />}
                {pending && <Tab content="Pending" />}
                {executed && <Tab content="Executed" />}
                {completed && <Tab content="Completed" />}
            </main>
            </div>
}
export default AgriInputTab

