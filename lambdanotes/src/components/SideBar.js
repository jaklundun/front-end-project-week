import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className='nav_container'>
                <div>
                    <h1 className='nav_header'>Lambda Notes</h1>
                </div>
                <div className='nav_buttons_container'>
                    <Link to='/' className='button_link'>
                        <div className='nav_button'>View Your Notes</div>
                    </Link>
                    <Link to='/create' className='button_link'>
                        <div className='nav_button'>+ Create New Note</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SideBar;