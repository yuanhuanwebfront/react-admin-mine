import React, {useState} from 'react';
import TopBar from "../../Layout/TopBar";
import Logo from '../../Layout/TopBar/Logo';
import ContentPage from '../../components/ContentPage';


import UserInfo from '../../Layout/TopBar/UserInfo';

const logoImg = require('../../assets/img/logo.png');

function Home(){

    return (
        <div className='home-page'>
            <TopBar left={<Logo img={logoImg}/>} right={<UserInfo/>} />
            <ContentPage>

            </ContentPage>
        </div>
    )
}

export default Home;
