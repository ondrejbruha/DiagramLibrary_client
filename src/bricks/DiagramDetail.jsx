import React from 'react';
import '../theme/main.css';


export const DetailItemContent = (props) => (
    <div class="detail_wrapper">
        <span class="detail_title">{props.diagramList[0].name}</span>
        <span class="detail_id">ID: {props.diagramList[0].id}</span>
        <span class="detail_topics">Topics: {props.diagramList[0].topics.join(", ")}</span>
        <span class="detail_type">Type: {props.diagramList[0].type}</span>

        <img class="detail_img" src={props.diagramList[0].img} alt={props.diagramList.name}></img>

        <div class="description_wrapper">
            <span class="detail_description">{props.diagramList[0].description}</span>

            <div class="description_footer">
                <span class="detail_published_date">Published {props.diagramList[0].publishDate}</span>
                <span class="detail_authors"> by {props.diagramList[0].authorList.join(", ")}</span>
            </div>
        </div>
    </div>
)