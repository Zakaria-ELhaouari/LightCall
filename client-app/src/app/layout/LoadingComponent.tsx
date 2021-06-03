import React from 'react'
import './loader.css'

interface Props {
    content?: string
}

const LoadingComponent = ({content = 'Loading...'}: Props) => {
    return (
        <div className="containerLoader">
            <div className="loader">
                <div className="note-0"></div>
                <div className="note-1"></div>
                <div className="note-2"></div>
                <div className="note-3"></div>
                <div className="note-4"></div>
            </div>
            <div className="statusLoader">{content}</div>
        </div>

    )
}

export default LoadingComponent
