import React from "react";
import { DownloadOutlined, DownOutlined, UpOutlined, FileExcelOutlined } from "@ant-design/icons"

const RowDiv = props => {

    const { display, index, entry, clickHandler } = props

    return (
        <div className="data-div" >
            <h4 onClick={() => clickHandler(entry.orderid, index)}>
                <input
                    type="radio"
                    id="name"
                    onChange={() => ""}
                    checked={display[index] ? true : false}
                />
                <span>{`AGBUY${entry.orderid}`}</span>
                {display[index] ? <UpOutlined /> : <DownOutlined />}
            </h4>
            <label>
                <div><img src={entry.img} alt={entry.batched_by} /></div>
                <h5>{`${entry.batched_by}`}</h5>
                <h5>{`${entry["date-time"]}`}</h5>
            </label>
            <a href={entry.filepath}>
                {<FileExcelOutlined />}
                {`RFOList_${entry.orderid} `}
                <DownloadOutlined />
            </a>
        </div>
    );
}

export default RowDiv