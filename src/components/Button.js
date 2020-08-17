import React from "react";

function renderClass({type = '', className = '', size = ''} = {}) {
    let baseClass = 'btn';
    return `${baseClass} btn-${type || ''} ${className} ${size}`;
}

export default function Button(props){
    return <button onClick={props.onClick}
            className={renderClass(props)}>{props.children}</button>
}