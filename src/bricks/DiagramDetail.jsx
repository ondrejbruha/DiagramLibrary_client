import React from 'react';
import '../theme/main.css';


export const DetailItemContent = (props) => {
    return(
        <div className="detail_wrapper">
            <button onClick={()=>{props.handleClose(false)}}>
                Close
            </button>
            <button onClick={()=>{props.next();}}>Next diagram</button>
            <span className="detail_title">{props.data.name}</span>
            <span className="detail_id">ID: {props.data.id}</span>
            <span className="detail_topics">Topics: {props.data.topics.join(", ")}</span>
            <span className="detail_type">Type: {props.data.type}</span>
    
            <img className="detail_img" src={props.data.img} alt={props.data.name}></img>
    
            <div className="description_wrapper">
                <span className="detail_description">{props.data.description}</span>
    
                <div className="description_footer">
                    <span className="detail_published_date">Published {(new Date(props.data.publishDate)).toLocaleDateString()}</span>
                    <span className="detail_authors"> by {props.data.authorList.join(", ")}</span>
                </div>
            </div>
        </div>
    );
}