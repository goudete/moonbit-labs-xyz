import React from 'react';

import {
  AppBar,
  Toolbar,
  Button,
} from 'react95';


const NavBar = () => {

    const onButtonClick = () => {
        console.log('CLICKED')
        return window.open('https://twitter.com/moonbitlabs', "_blank");
    }

    return <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
            style={{ fontWeight: 'bold' }}
            onClick={() => onButtonClick()}
            >
            <img
                src={require('../../static/computer.png')}
                alt='react95 logo'
                style={{ height: '20px', marginRight: 4 }}
            />
            Moonbit Labs
            </Button>
        </div>
        </Toolbar>
    </AppBar>
}

export default NavBar;