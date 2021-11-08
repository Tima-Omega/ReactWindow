import React from 'react';
import Works from './Works';
import About from './About';

const DockItems = [
    {
        id: 'about',
        icon: '/img/about.svg',
        title: 'About me',
        resizable: true,
        opened: false,
        hidden: false,
        expanded: false,
        children: <About></About>,
        width: 860,
        height: 600,
        desc: 'About'

    },
    {
        id: 'works',
        icon: '/img/works.svg',
        title: 'Works',
        resizable: true,
        opened: false,
        hidden: false,
        expanded: false,
        children: <Works></Works>,
        width: 1300,
        height: 800,
        desc: 'Works'
    },
];

export default function Dock(props) {
    const { onShortcutClick } = props;
    return (
        <div className="dock">
            <nav className="dock__nav">
                {DockItems.map((x) => 
                    <div
                        key={x.id}
                        className={'dock__shortcut' + (x.opened ? ' opened' : '')}
                        onClick={() => onShortcutClick?.(x)}
                    >   
                        <div className="dock__hint">{x.desc}</div>
                        <img src={x.icon} alt={x.title} />
                    </div>
                )}
            </nav>
        </div>
    );
}
