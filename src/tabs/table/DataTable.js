import React,{useEffect,useState,Fragment} from "react"
import "../../main.scss"
import OrderDetailTable from "./OrderDetailTable";
import Modal from "../../components/Modal"
import RowDiv from "./RowDiv";
const DataTable = () =>{

    const [data,setData] = useState();
    const [modal,setModal] = useState({
        display:false, data:[]
    });
    const [display,setDisplay] = useState([]);
    useEffect(()=>{
        fetch("./data.json").then(res =>res.json()).then(setData)
    },[])
    const clickHandler = (id,index) =>{
            setDisplay((prevDisplay) => {
            let list = [...prevDisplay]
            if(list[index] != null)   list[index] = null;
            else     list[index] = {id:id,display:"block"}
            return list
        })
    }
    return <div className="main-data-div">
        {data &&  data.map((entry,index) =><Fragment key={index}> <RowDiv key={entry.orderid} clickHandler={clickHandler} display={display} entry={entry} index={index} /> 
                {display[index] && <div className="table-div">
                <table><tbody>
                        <tr>
                            <th></th><th>Agri-Input Category</th><th>Product Image</th>
                            <th>Product Description</th><th>Order Quantity</th><th></th></tr>
                        {entry.orderDetails.map((order,index) => <OrderDetailTable key={index}
                        setModal={setModal} order={order} index={index} />)}
                </tbody></table>
            </div>}
        </Fragment>)}
        {modal.display && <Modal modal={modal} setModal={setModal} className="modal-div" />}
        </div>
}
export default DataTable