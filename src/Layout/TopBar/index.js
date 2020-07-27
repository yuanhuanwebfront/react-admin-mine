import React, { useState } from 'react';

function Index(props){

    return (
        <div className='top-bar'>
            <div className="left">{props.left}</div>
            <div className="right">{props.right}</div>
        </div>
    )

}

export default Index;