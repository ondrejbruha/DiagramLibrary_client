import React from 'react';
import '../theme/main.css';
import * as Unit from '../Reusable'
import Icon from '@mdi/react';
import {mdiFinance} from '@mdi/js';


export const ItemBoxContent = (props) => (
    <div id="box_div">
        {props.diagramList.map(item => (
            <Unit.ItemBox key={item.toString()}>
                <div class="box_title"><span class="box_icon"><Icon path={mdiFinance} size={1.0}/></span> {item.name.slice(0, 20)} </div>
                <div class="box_type"> Type: {item.type.slice(0, 20)} </div>
                <div class="box_topics"> Topic: {item.topics.join(", ").slice(0, 20)} </div>
                <img class="box_img" src={item.img} alt={item.name.slice(0, 20)}></img>
                <p class="box_description"> {item.description.slice(0, 100)}... </p>
                <div class="box_authors"> {item.authorList.join(", ").slice(0, 25)} </div>
            </Unit.ItemBox>
        ))}
    </div>
)
