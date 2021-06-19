import React from "react"
const OrderDetailTable = props =>{
    
    const {category,image,description,quantity} = props.order;
    
    return <tr>
                <td>{props.index+1}</td>
                <td>{category}</td>
                <td><img src={image} alt={description}/></td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td><i className="fas fa-external-link-alt" onClick={(data)=>props.setModal({
                        display:true,
                        data:props.order
                })}></i></td>       
        </tr>                   
                
    

}

export default OrderDetailTable