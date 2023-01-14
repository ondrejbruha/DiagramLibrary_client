import React from 'react';
import '../theme/main.css';
import * as Unit from '../Reusable'
import Icon from '@mdi/react';
import {mdiFinance} from '@mdi/js';


export const DiagramTableList = (props) => (
    <div>
        <table id="item_list_content">
            <tr>
                <th></th>
                <th>Title</th>
                <th>Type</th>
                <th>Topics</th>
                <th>Authors</th>
                <th class="low-responsive">Description</th>
                <th class="low-responsive">Published</th>
                <th class="low-responsive">ID</th>
            </tr>


            {props.diagramList.map(item => (
                <Unit.ItemList key={item.toString()}>
                    <td class="list_icon"><Icon path={mdiFinance} size={1.0}/></td>
                    <td class="list_title"> {item.name} </td>
                    <td class="list_type"> {item.type} </td>
                    <td class="list_topics"> {item.topics.join(", ")} </td>
                    <td class="list_authors"> {item.authorList.join(", ")} </td>
                    <td class="list_description"> {item.description.slice(0, 100)}...</td>
                    <td class="list_published_date"> {(new Date(item.publishDate)).toLocaleDateString()} </td>
                    <td class="list_id"> {item.id} </td>
                </Unit.ItemList>
            ))}

        </table>
    </div>
)