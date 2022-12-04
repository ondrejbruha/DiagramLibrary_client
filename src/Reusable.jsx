import React from 'react'
import './theme/grid.css';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Components
///////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MainWrapper = (p) => 
    <div id="scroll_bar">
        <div id="main_wrapper"> {p.children} </div>
    </div>

export const HeadBar = (p) => 
    <div id="head_strip">
        <div id="head_bar"> {p.children} </div>
    </div>

export const ItemBox = (p) => <div class="item_box col span-1-of-3"> {p.children} </div>
export const Footer = () => <p id="footer">© 2022 Diagram gallery ~ Team 3</p>