import React from 'react';

import {
  AppBar,
  Toolbar,
  Button,
} from 'react95';


const NavBar = () => {

    const onButtonClick = () => {
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
                src={require('../../static/logo60x60.png')}
                alt='react95 logo'
                style={{ height: '30px', marginRight: 4 }}
            />
            Moonbit Labs
            </Button>
        </div>
        </Toolbar>
    </AppBar>
}

export default NavBar;