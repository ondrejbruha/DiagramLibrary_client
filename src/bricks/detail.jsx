import React from "react";
import Icon from "@mdi/react";
import { mdiFinance } from "@mdi/js";
import "../theme/detail.css"

function Detail(props) {
    let item = props.data;
    return (
        <div key="detail" className="detail">
            <div className="detailHeader">
                <button onClick={()=>{props.next();}}>Next diagram</button>
                <div class="box_title">
                    <span class="box_icon">
                        <Icon path={mdiFinance} size={1.0} />
                    </span>{" "}
                    {item.name.slice(0, 20)}{" "}
                </div>
            </div>
            <div className="detailUnderHeader">
                <div class="box_type"> Type: {item.type.slice(0, 20)} </div>
                <div class="box_topics">
                    {" "}
                    Topic: {item.topics.join(", ").slice(0, 20)}{" "}
                </div>
                <div class="box_authors"> Author: {item.authorList.join(", ").slice(0, 25)} </div>
            </div>
            <div className="detailBody">
                <img class="box_img" src={item.img} alt={item.name.slice(0, 20)}></img>
                <p class="box_description"> {item.description.slice(0, 100)}... </p>
            </div>
            <button onClick={()=>{props.handleClose(false)}}>
                Close
            </button>
        </div>
    );
}
export default Detail;
