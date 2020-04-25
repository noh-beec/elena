import React from 'react';
import Content from './Content.js';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
class WrapperContent extends React.Component{
    state = {
        fullheader: true
    }

    render = () =>{
        return(
            <>
            <Content>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Content>
            </>
        )
    }
}
export default WrapperContent;