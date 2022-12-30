import React, {useState, useMemo} from 'react';
import '../theme/main.css';
import * as Unit from '../Reusable'
import Icon from '@mdi/react';
import {
    mdiTable,
    mdiViewGridOutline,
    mdiImageSearchOutline,
    mdiFilterCog,
    mdiAccountCircleOutline,
    mdiPencilOutline
} from '@mdi/js';

import {ItemBoxContent} from './DiagramGridList'
import {ItemListContent} from './DiagramTableList'
// import {DetailItemContent} from './DiagramDetail'


export const AppContent = (props) => {
    const [viewType, setViewType] = useState("grid");
    const isGrid = viewType === "grid";
    // Todo Antirix
    const [searchBy, setSearchBy] = useState("");


    const DisplaySwitch = (p) =>
        <span
            onClick={() =>
                setViewType((currentState) => {
                    if (currentState === "grid") return "table";
                    else return "grid";
                })
            }
        >
        {p.children}
    </span>


    return (
        <>
            <Unit.HeadBar>
                <ul id="left_bar">

                    {/* Todo Antirix */}

                    {/* <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        id="searchInput"
                        placeholder="Search"
                        onChange={handleSearchDelete}>

                        </input>

                        <input
                        type="submit"
                        >

                        </input>
                        
                    </form> */}

                    {/* Search button */}
                    <li id="search">Search</li>
                    <li id="search_sm"><Icon size={1} path={mdiImageSearchOutline}/></li>

                    {/* Filter button */}
                    <li id="filter">Filter</li>
                    <li id="filter_sm"><Icon size={1} path={mdiFilterCog}/></li>

                    {/* Display button */}
                    <DisplaySwitch>
                        <li id="display">{isGrid ? "Table" : "Grid"}</li>
                    </DisplaySwitch>

                    <DisplaySwitch>
                        <li id="display_sm"><Icon size={1} path={isGrid ? mdiTable : mdiViewGridOutline}/>{" "}</li>
                    </DisplaySwitch>
                </ul>


                <ul id="right_bar">

                    {/* Create button */}
                    <li id="create">Create</li>
                    <li id="create_sm"><Icon size={1} path={mdiPencilOutline}/></li>

                    {/* Login button */}
                    <li id="login">Login</li>
                    <li id="login_sm"><Icon size={1} path={mdiAccountCircleOutline}/></li>
                </ul>
            </Unit.HeadBar>


            {isGrid ? (
                <ItemBoxContent diagramList={props.diagramList}/>
                ) : (
                <ItemListContent diagramList={props.diagramList}/>
                )}
        </>
    )
}