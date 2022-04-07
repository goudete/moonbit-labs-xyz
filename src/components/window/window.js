import React from 'react';

import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
} from 'react95';


const WindowPopover = (props) => {
    const { activeIcon, onIconClick } = props;

    return <Window
            resizable
            className='window'
            style={{
                width: '50em',
                height: '25em',
                maxWidth: '100%',
                margin: 'auto',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                overflowY: 'auto'
            }}
        >
        <WindowHeader
            style={{position: 'relative'}}
            className='window-header'
        >
            <span>{activeIcon?.title}</span>
            <Button style={{position: 'absolute', right: '10px'}} onClick={() => onIconClick({})}>
                <span>X</span>
            </Button>
        </WindowHeader>
        <WindowContent>
            {
                activeIcon?.body.map((section) => {
                    if (section[0] === '@') {
                        return <div>
                             <img src={require('../../static/twitter.png')} style={{ maxWidth: '20px', marginRight: '5px'}} alt='twitter' />
                            <a target="_blank" href={'https://twitter.com/' + section.slice(1)}>{section}</a>
                        </div>
                        
                    } else if (section.includes('png')) {
                        return <div style={{textAlign: 'center'}}>
                            <img
                                src={require(`../../static/${section}`)}
                                alt='img'
                                style={{
                                    width: '30em',
                                    maxWidth: '100%',
                                }}
                            />
                        </div>
                    } else {
                        return <p>{section}</p>
                    }
                })
            }
        </WindowContent>
    </Window>
}

export default WindowPopover;