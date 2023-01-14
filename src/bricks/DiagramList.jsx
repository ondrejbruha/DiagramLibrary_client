import React, {useState, useMemo} from 'react';
import '../theme/main.css';
import * as Unit from '../Reusable'
import Icon from '@mdi/react';
import {
    mdiTable,
    mdiViewGridOutline,
    mdiAccountCircleOutline,
    mdiPencilOutline
} from '@mdi/js';

import {DiagramGridList} from './DiagramGridList'
import {DiagramTableList} from './DiagramTableList'
import {CreateDiagram} from './CreateDiagram';


export const DiagramList = (props) => {

    ///////////////////////////////
    // Settings & initialization //
    ///////////////////////////////

        // Part of display switch function //
        const [viewType, setViewType] = useState("grid");
        const isGrid = viewType === "grid";

        // Part of search function //
        const [searchBy, setSearchBy] = useState("");
        const [createModal, setCreateModal] = useState(false);


    /////////////////////
    // Local functions //
    /////////////////////

        // Part of display switch function //
        const DisplaySwitch = (p) => (
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
        )


        // Part of search function //
        const filteredDiagramList = useMemo(() => {
            return props.diagramList.filter((item) => {
                return (
                    item.name
                    .toLocaleLowerCase()
                    .includes(searchBy.toLocaleLowerCase())
                );
            });
        }, [searchBy, props.diagramList]);
        

        // Part of search function //
        const handleSearch = (event) => {
            event.preventDefault();
            setSearchBy(event.target["searchInput"].value);
        }
        

        // Part of search function //
        const handleSearchDelete = (event) => {
            if (!event.target.value) setSearchBy("");
        }


    return (
        <>
            <Unit.HeadBar>
                <ul id="left_bar">

                    {/* Search button */}
                    <li id="search">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Search.."
                                onChange={handleSearchDelete}>
                            </input>
                        </form>
                    </li>


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
                    <li id="create" onClick={()=>{setCreateModal(true)}}>Create</li>
                    <li id="create_sm"><Icon size={1} path={mdiPencilOutline}/></li>


                    {/* Login button */}
                    <li id="login">Login</li>
                    <li id="login_sm"><Icon size={1} path={mdiAccountCircleOutline}/></li>
                </ul>
            </Unit.HeadBar>

            {createModal ? <CreateDiagram handleClose={setCreateModal}></CreateDiagram> : <></>}


            {isGrid ? (
                <DiagramGridList diagramList={filteredDiagramList}/>
                ) : (
                <DiagramTableList diagramList={filteredDiagramList}/>
                )}
        </>
    )
}