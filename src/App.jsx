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
    title: `Num1`,
    img: num1,
    desc: `....... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Proin
    in tellus sit amet Proin in tellus sit amet nibh dignissim sagittis.`,
  },

  {
    title: `Title num2`,
    img: num2,
    desc: `....... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Proin
    in tellus sit amet nibh dignissim sagittis. Maecenas fermentum, sem in pharetra
    pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Mauris metus.
    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
    nisi ut aliquid ex ea commodi consequatur? Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Nullam eget nisl. Proin in tellus sit amet nibh dignissim sagittis.`,
  },

  {
    title: `num3`,
    img: num3,
    desc: `description 03`,
  },

  {
    title: `num4`,
    img: num4,
    desc: `description 04`,
  },

  {
    title: `Num1`,
    img: num1,
    desc: `....... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Proin
    in tellus sit amet Proin in tellus sit amet nibh dignissim sagittis.`,
  },

  {
    title: `Title num2`,
    img: num2,
    desc: `....... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. Proin
    in tellus sit amet nibh dignissim sagittis. Maecenas fermentum, sem in pharetra
    pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Mauris metus.
    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
    nisi ut aliquid ex ea commodi consequatur? Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Nullam eget nisl. Proin in tellus sit amet nibh dignissim sagittis.`,
  },

  {
    title: `num3`,
    img: num3,
    desc: `description 03`,
  },

  {
    title: `num4`,
    img: num4,
    desc: `description 04`,
  },

]
/////////////////////////// <== remove


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main
///////////////////////////////////////////////////////////////////////////////////////////////////////////

export const App = () => (
<>
  
  <Unit.MainWrapper>
    <NavBar />
    <ItemContent />
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



const ItemContent = () => (
  <div>
    {test_data.map(item => (
      <Unit.ItemBox key={item.toString()}>
        <h1> <Icon path={mdiFinance} size={1.2}/> {item.title} </h1>
        <img src={item.img}></img>
        <p> {item.desc} </p>
      </Unit.ItemBox>
    ))}
  </div>
)

