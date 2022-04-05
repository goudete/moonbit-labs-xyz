import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import original from "react95/dist/themes/original";
import Window from './components/window/window';
import NavBar from './components/navbar/navbar';

import { iconMetadata } from './config';

import './App.scss';

const App = () => {
    const [activeIcon, setActiveIcon] = useState({});

    const onIconClick = (icon) => {
        if (icon === {}) activeIcon({})

        const selectedIcon = iconMetadata.find((element) => element.title === icon);
        setActiveIcon(selectedIcon)

        return;
    }

    return (
        <ThemeProvider theme={original}>
            <div className='container'>
                <div className='container__header'>
                    <NavBar />
                </div>
                <div className='container__body'>
                    <div className='container__body-icons'>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Logo')}>
                            <img src={require('./static/buzz.gif')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Logo</div>
                        </div>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('About')}>
                            <img src={require('./static/planet.gif')} alt='planet' />
                            <div className='container__body-icons__icon-text'>About</div>
                        </div>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Founding Team')}>
                            <img src={require('./static/palm.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Team</div>
                        </div>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Services')}>
                            <img src={require('./static/doc.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Services</div>
                        </div>
                        {/* <div className='container__body-icons__icon' onClick={() => onIconClick('Projects')}>
                            <img src={require('./static/cactus.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Projects</div>
                        </div> */}
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Terms and Conditions')}>
                            <img src={require('./static/bin.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Legal stuff</div>
                        </div>
                    </div>
                    {
                        activeIcon?.title && 
                            <Window 
                                activeIcon={activeIcon}
                                onIconClick={onIconClick}
                            />
                    }
                </div>
                <div className='container__footer'></div>
            </div>
        </ThemeProvider>
    );
}

export default App;
