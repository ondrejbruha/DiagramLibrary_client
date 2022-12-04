import React from 'react';
import './theme/main.css';
import * as Unit from './Reusable'
import * as Bars from './barsData'
import Icon from '@mdi/react';
import { mdiFinance } from '@mdi/js';


//// Only testing = remove /// ====>

import num1 from './images/01.png'
import num2 from './images/02.png'
import num3 from './images/03.png'
import num4 from './images/04.png'

const test_data = [
  {
    "name": "Antirix Testing title xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxxxxxxxx xxxxxxxx xxxxxxxx xxxxxx",
    "type": "graf xxxx xxxxxxx xxxxxxx xxxxxxxxx xxxxxx xxxxxxx xxxxxx",
    "authorList": [
      "Antirix", "Matthew", "Shiro xxx xxxxxxxx xxxxxxx xxxxx xxxxx"
    ],
    "description": ", lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified, lorem ipsum max, lorem ipsum max this is first graph modified",
    "topics": [
      "numeric", "s:class", "testing block xxxxx xxxxxxxxxxx xxxxxx xxxxxxx"
    ],
    "publishDate": "25.11.2022",
    "img": num1,
    "published": true,
    "id": "e2ad64271bee7be1"
  },
  {
    "name": "graf 2",
    "type": "graf",
    "authorList": [
      "id1",
      "id2",
      "lorem ipsum max",
      "lorem ipsum max"
    ],
    "description": "this is first graph, lorem ipsum max, lorem ipsum max, lorem ipsum max, lorem ipsum max",
    "topics": [
      "id1",
      "id2"
    ],
    "publishDate": "25.11.2022 , lorem ipsum max, lorem ipsum max, lorem ipsum max",
    "img": num2,
    "published": true,
    "id": "34093f96c9510b1a , lorem ipsum max, lorem ipsum max, lorem ipsum max"
  },
  {
    "name": "graf 3",
    "type": "graf",
    "authorList": [
      "id1",
      "id2"
    ],
    "description": "this is first graph",
    "topics": [
      "id1",
      "id2"
    ],
    "publishDate": "25.11.2022",
    "img": num3,
    "published": true,
    "id": "f20b04b6c978bba0"
  },
  {
    "name": "graf 4",
    "type": "graf",
    "authorList": [
      "id1",
      "id2"
    ],
    "description": "this is first graph",
    "topics": [
      "id1",
      "id2"
    ],
    "publishDate": "25.11.2022",
    "img": num4,
    "published": true,
    "id": "15fbdfec53f05157"
  },
  {
    "name": "graf 5",
    "type": "graf",
    "authorList": [
      "id1",
      "id2"
    ],
    "description": "this is first graph",
    "topics": [
      "id1",
      "id2"
    ],
    "publishDate": "25.11.2022",
    "img": num2,
    "published": true,
    "id": "e2ad64271bee7be1"
  }
]
/////////////////////////// <== remove


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main
///////////////////////////////////////////////////////////////////////////////////////////////////////////

export const App = () => (
<>
  
  <Unit.MainWrapper>
    <NavBar />
    <ItemListContent />
    <ItemBoxContent />
    <Unit.Footer />
  </Unit.MainWrapper>
</>
)



///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Local components
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const NavBar = () => (
  <Unit.HeadBar>
    <ul id="left_bar">
      {Bars.leftBar.map(item => (
        <li key={item.toString()} id={item.id}>
          {item.name}
        </li>    
      ))}
    </ul>

    <ul id="right_bar">
      {Bars.rightBar.map(item => (
        <li key={item.toString()} id={item.id}>
          {item.name}
        </li>    
      ))}
    </ul>
  </Unit.HeadBar>
)


/// Grid display ///

const ItemBoxContent = () => (
  <div>
    {test_data.map(item => (
      <Unit.ItemBox key={item.toString()}>
        <div class="box_title"> <Icon path={mdiFinance} size={1.2}/> {item.name.slice(0, 25)} </div>
        <div class="box_type"> Type: {item.type.slice(0, 25)} </div> 
        <div class="box_topics"> Topic: {item.topics.join(", ").slice(0, 25)} </div>
        <img class="box_img" src={item.img}></img>
        <p class="box_description"> {item.description.slice(0, 100)}... </p>
        <div class="box_authors"> {item.authorList.join(", ").slice(0, 25)} </div>
      </Unit.ItemBox>
    ))}
  </div>
)


/// Table display ///

const ItemListContent = () => (
  <div>
    <table id="item_list_content">
      <tr>
        <th colSpan={2}>Title</th>
        <th>Type</th>
        <th>Topics</th>
        <th>Authors</th>
        <th>Description</th>
        <th>Published</th>
        <th>ID</th>
      </tr>


      {test_data.map(item => (
        <Unit.ItemList key={item.toString()}>
          <td class="list_icon"> <Icon path={mdiFinance} size={1.0}/> </td>
          <td class="list_title"> {item.name} </td>
          <td class="list_type"> {item.type} </td>
          <td class="list_topics"> {item.topics.join(", ")} </td>
          <td class="list_authors"> {item.authorList.join(", ")} </td>
          <td class="list_description"> {item.description.slice(0, 100)}... </td>
          <td class="list_published_date"> {item.publishDate} </td>
          <td class="list_id"> {item.id} </td>
        </Unit.ItemList>
      ))}

    </table>
  </div>
)
