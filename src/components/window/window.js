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
        <WindowContent
            style={{
                display: 'flex',
                flexDirection: activeIcon.title === 'Legal' ? 'row' : 'column'
            }}
        >
            {
                activeIcon?.body.map((section) => {
                    if (section.type === 'twitter') {
                        return <div>
                             <img src={require('../../static/twitter.png')} style={{ maxWidth: '20px', marginRight: '5px'}} alt='twitter' />
                            <a target="_blank" href={'https://twitter.com/' + section.content.slice(1)} rel="noreferrer">{section.content}</a>
                        </div>

                    } else if (section.type === 'email') {
                        return <div>
                             <img src={require('../../static/email.png')} style={{ maxWidth: '30px', marginRight: '5px'}} alt='email' />
                             <a>{section.content}</a>
                        </div>

                    } else if (section.type === 'png') {
                        return <div style={{textAlign: 'center'}}>
                            <img
                                src={require(`../../static/${section.content}`)}
                                alt='img'
                                style={{
                                    width: '17em',
                                    maxWidth: '100%',
                                }}
                            />
                        </div>

                    } else if (section.type === 'icon') {
                        return <div className='container__body-icons__icon' style={{ textAlign: 'center' }} onClick={() => onIconClick(section.content)}>
                            <img src={require(`../../static/${section.content}.png`)} alt={section.content} />
                            <div className='container__body-icons__icon-text'>{section.content}</div>
                        </div>

                    } else if (section.type === 'copyright') {
                        return <div style={{textAlign: 'center'}}>
                            <p>{section.content}</p>
                        </div>

                    }
                    else {
                        return <p>{section.content}</p>
                    }
                })
            }
        </WindowContent>
    </Window>
}

export default WindowPopover;