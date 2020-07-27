import React from 'react';

export default function ContentPage(props){
    return (
        <div className='content'>
            {props.children}
        </div>
    )
}