import React from 'react';
import ReactDOM from 'react-dom';
import WrapperContent from './layout/WrapperContent'
import Header from './layout/Header.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './layout/Footer';

import './index.scss';

const app = (
    <Router>
        <Header />
        <WrapperContent />
        <Footer />
    </Router>
)

ReactDOM.render(app,document.getElementById('root'))

