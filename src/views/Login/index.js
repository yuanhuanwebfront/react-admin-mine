import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

import { setUserToken } from "../../Util/storage";

export default function Login(){

    let history = useHistory(),
        [userName, setUserName] = useState(''),
        [userPassword, setUserPassword] = useState('');

    function login(){
        if(!userName || !userPassword){
            return false;
        }else{
            setUserToken(userName);
            history.push('/');
        }
    }

    function reset(){
        setUserName('');
        setUserPassword('');
    }

    return <div className='login-page'>
        <div className="ab-center area">
            <label className='flex form-label'>
                <span className="name">用户名：</span>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="请输入用户名" />
            </label>

            <label className='flex form-label'>
                <span className="name">密码：</span>
                <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="请输入密码" />
            </label>

            <div className="text-r">
                <Button onClick={() => reset()}>重置</Button>
                <Button onClick={() => login()} type="success">登录</Button>
            </div>


        </div>
    </div>
}