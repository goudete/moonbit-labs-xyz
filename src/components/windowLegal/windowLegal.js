import React from 'react';

import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
} from 'react95';


const WindowLegal = (props) => {
    const { activeIconLegal, onIconLegalClick } = props;

    return <Window
        resizable
        className='window'
        style={{
            width: '50em',
            height: '50em',
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
            style={{ position: 'relative' }}
            className='window-header'
        >
            <span>{activeIconLegal?.title}</span>
            <Button style={{ position: 'absolute', right: '10px' }} onClick={() => onIconLegalClick({})}>
                <span>X</span>
            </Button>
        </WindowHeader>
        <WindowContent>
            {
                activeIconLegal?.body.map((section) => {
                    return <p>{section}</p>;
                })
            }
        </WindowContent>
    </Window>
}

export default WindowLegal;