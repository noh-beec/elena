import React from 'react';
import ReactDOM from 'react-dom';
import WrapperContent from './layout/WrapperContent'
import Header from './layout/Header.js';
import Seccion1 from "./components/Seccion1"


import './index.scss';

const app = (
    <>
        <Header></Header>
        <WrapperContent>
            <Seccion1 />
        </WrapperContent> 
    </>
)

ReactDOM.render(app,document.getElementById('root'))

