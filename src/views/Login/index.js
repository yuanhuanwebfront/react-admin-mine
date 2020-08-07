import React, { useState } from "react";
import Button from "../../components/Button";

export default function Login(){

    let [count, setCount] = useState(1);

    function test(num){
        setCount(++count);
    }

    return <div className='login-page'>
        <div className="ab-center">
            <Button onClick={() => test(count)} type="success">登录</Button>
        </div>
    </div>
}