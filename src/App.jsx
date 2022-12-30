import React, {useEffect, useState} from 'react';
import './theme/main.css';
import * as Unit from './Reusable'

import {AppContent} from './bricks/DiagramList'


export const App = () => {
    const [diagramList, setDiagramList] = useState([]);
    useEffect(() => {
        fetch('diagram/listFull')
            .then(response => response.json())
            .then(diagramList => setDiagramList(diagramList));
    }, [])

    return (
        <>
            <Unit.MainWrapper>
                <AppContent diagramList={diagramList} />
                <Unit.Footer/>
            </Unit.MainWrapper>
        </>
    )
}