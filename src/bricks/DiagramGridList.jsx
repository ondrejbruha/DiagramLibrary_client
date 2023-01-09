import React, {useState} from 'react';
import '../theme/main.css';
import * as Unit from '../Reusable'
import Icon from '@mdi/react';
import {mdiFinance} from '@mdi/js';
import UpdateDiagram from './update';
import Detail from './detail';


function ItemBoxContent(props) {
    const [update, setUpdate] = useState(false);
    const [itm, setItm] = useState(props[0]);
    const [detail, setDetail] = useState(false);
    return(
        <div id="box_div">
            {props.diagramList.map(item => (
                <Unit.ItemBox key={item.toString()}>
                    <div class="box_title"><span class="box_icon"><Icon path={mdiFinance} size={1.0}/></span> {item.name.slice(0, 20)} </div>
                    <div class="box_type"> Type: {item.type.slice(0, 20)} </div>
                    <div class="box_topics"> Topic: {item.topics.join(", ").slice(0, 20)} </div>
                    <img class="box_img" src={item.img} alt={item.name.slice(0, 20)}></img>
                    <p class="box_description"> {item.description.slice(0, 100)}... </p>
                    <button onClick={()=>{setItm(item);setUpdate(true); }}>Update</button>
                    <button onClick={()=>{setItm(item);setDetail(true);}}>Detail</button>
                    <div class="box_authors"> {item.authorList.join(", ").slice(0, 25)} </div>
                </Unit.ItemBox>
            ))}
            {update ? <UpdateDiagram key="update" data={itm} handleClose={setUpdate}></UpdateDiagram> : null}
            {detail ? <Detail key="detail" data={itm} handleClose={setDetail}></Detail>: null}
        </div>
    )
}
export default ItemBoxContent;
