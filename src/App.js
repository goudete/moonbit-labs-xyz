import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import original from "react95/dist/themes/original";
import Window from './components/window/window';
import WindowLegal from './components/windowLegal/windowLegal';
import NavBar from './components/navbar/navbar';

import { iconMetadata } from './metadata';

import './App.scss';

const App = () => {
    const [activeIcon, setActiveIcon] = useState({});
    const [activeIconLegal, setActiveIconLegal] = useState({});

    const onIconClick = (icon) => {
        if (icon === {}) setActiveIcon({});

        const selectedIcon = iconMetadata.find((element) => element.title === icon);
        setActiveIcon(selectedIcon);

        return;
    }

    const onIconLegalClick = (icon) => {
        if (icon === {}) setActiveIconLegal({});

        const selectedIcon = iconMetadata.find((element) => element.title === icon);
        setActiveIconLegal(selectedIcon);

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
                            <img src={require('./static/team.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Team</div>
                        </div>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Services')}>
                            <img src={require('./static/services.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Services</div>
                        </div>
                        {/* <div className='container__body-icons__icon' onClick={() => onIconClick('Projects')}>
                            <img src={require('./static/cactus.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Projects</div>
                        </div> */}
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Contact Us')}>
                            <img src={require('./static/contact.png')} style={{ height: '60px', width: '65px'}} alt='planet' />
                            <div className='container__body-icons__icon-text'>Contact Us</div>
                        </div>
                        <div className='container__body-icons__icon' onClick={() => onIconClick('Legal')}>
                            <img src={require('./static/legal.png')} alt='planet' />
                            <div className='container__body-icons__icon-text'>Legal</div>
                        </div>
                    </div>
                    {
                        activeIcon?.title &&
                            <Window 
                                activeIcon={activeIcon}
                                onIconClick={onIconClick}
                            />
                    }
                    {
                        activeIconLegal?.title &&
                            <WindowLegal
                                activeIconLegal={activeIconLegal}
                                onIconLegalClick={onIconLegalClick}
                            />
                    }
                </div>
                <div className='container__footer'>
                    <div className='container__footer-bottomContent'>
                        <img src={require('./static/trash.png')} alt='planet' />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
