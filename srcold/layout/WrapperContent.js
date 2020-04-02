import React from 'react';
import Content from './Content.js';
class WrapperContent extends React.Component{
    state = {
        open: false
    }
    openMenu = () =>{
        if(this.state.open === false){
            this.setState({
                open:true
            })
        }else{
            this.setState({
                open:false
            })
        }
    }
    render = () =>{
        return(
            <>
           
            <Content abierto={this.state.open}>
                {this.props.children}
            </Content>
            </>
        )
    }
}
export default WrapperContent;