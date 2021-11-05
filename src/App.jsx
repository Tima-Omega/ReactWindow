import React, { useState } from 'react';
import './styles/main.scss';
import './styles/normalize.css';
import Dock from './components/Dock';
import Window from './components/Window';

function App() {
    const [windows, setWindows] = useState([]);

    return (
        <div>
            <Dock
                onShortcutClick={(w) => {
                    if (!windows.some((ww) => ww.id === w.id)) {
                        setWindows([...windows, w]);
                    }
                }}
            />
            <div className="windows">
                {windows.map((w, i, a) => (
                    <Window
                    key={w.id}
                    count={a.length}
                    index={i}
                    title={w.title}
                    hidden={w.hidden}
                    expanded={w.expanded}
                    width={w.width}
                    height={w.height}
                    onClose={() => {
                        w.opened = false;
                        const newWindows = windows.concat();
                        newWindows.splice(i, 1);
                        setWindows(newWindows);
                    }}
                    onHide={() => {
                        w.hidden = !w.hidden;
                        setWindows(windows);
                    }}
                    onExpand={() => {
                        w.expanded = !w.expanded;
                        setWindows(windows);
                    }}
                    onActive={() => {
                        const newWindows = windows.concat();
                        newWindows.unshift(...newWindows.splice(i, 1));
                        setWindows(newWindows);
                    }}
                    >{w.children}</Window>
                ))}
            </div>
        </div>
    );
}

export default App;
