import React from "react";

function renderClass({type = '', className = ''} = {}) {
    let baseClass = 'btn';
    //  先检查有没有传入type  传入type  构造type对应的class名
    if(type){
        baseClass = `${baseClass} btn-${type}`
    }
    if(className){
        baseClass = `${baseClass} ${className}`
    }
    return baseClass;
}

export default function Button(props){
    return <button onClick={props.onClick}
            className={renderClass(props)}>{props.children}</button>
}