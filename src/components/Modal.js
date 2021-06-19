import React,{Fragment} from "react";
import {CloseOutlined} from "@ant-design/icons"
import "../main.scss"

const Modal = ({modal,setModal,className}) =>{
    const {category,quantity,image,description} = modal.data;
    return  <Fragment><div className="modal-overlay" >
            </div>
            <div className={className}><CloseOutlined onClick={()=> setModal({display:false})}/>
                <h3>{`Category: ${category}`}</h3>
                <p>{`Descrption: ${description}`}</p>
                <img src={image} alt={description} />
                <h4>{`Quantity: ${quantity}`}</h4> 
            </div></Fragment>
        }

export default Modal