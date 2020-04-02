import React from 'react';
import ReactDOM from 'react-dom';
import WrapperContent from './layout/WrapperContent'
import Header from './layout/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './pages/Producs';
import Product from './pages/Product';
import Home from './pages/Home'

import './index.scss';

const app = (
    <Router>
        <Header></Header>
        <WrapperContent>
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={Product} />
        </Switch>
        </WrapperContent> 
    </Router>
)

ReactDOM.render(app,document.getElementById('root'))

