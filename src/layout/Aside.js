import React from 'react';
import './Aside.scss';
import Icon from '@material-ui/core/Icon';

class Aside extends React.Component{
    abrir=()=>{
        this.props.toggleState()
    }
    render=()=>{
        const isOpen = this.props.abierto === true;
        return(
            <aside className={isOpen ? 'open' : ''}>
                <div className="openSwitcher">
                    <Icon onClick={this.abrir}>view_list</Icon>
                </div>
            </aside>
        )
    }
}
export default Aside;