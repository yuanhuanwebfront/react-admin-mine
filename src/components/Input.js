import React from 'react';

export default function Input(props){

    let {type = 'text', icon, placeholder} = props;

    return <div className={`input-area ${icon ? 'icon' : ''}`}>
        <input type={type} placeholder={placeholder} />
        {icon ? <i className={icon} /> : ''}
    </div>

}