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
                height: 'auto',
                maxWidth: '100%',
                margin: '0 auto',
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
                        return <a target="_blank" href={'https://twitter.com/' + section.slice(1)}>{section}</a>
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