import React from 'react'
import "../main.scss"
import DataTable from "./table/DataTable"

const AgriContentBox = () =>{
    

    return <div className="main-div">
                <div className="button-div">
                    <button>Undo Batch</button>
                    <button>Assign Supplier</button>
                    <button>Generate PO</button>
                </div>
                <div className="heading-div"><h4>Executing Agri-Input Orders  <span>Batched By</span></h4></div>
                <DataTable />
            </div>

}

export default AgriContentBox