import React, { useState } from 'react';
import './styles/main.scss';
import './styles/normalize.css';
import Dock from './components/Dock';
import Window from './components/Window';
import Intro from './components/Intro';

function App() {
    const [windows, setWindows] = useState([]);

    return (
        <div>
            <Intro />
            <Dock
                onShortcutClick={(w) => {
                    const index = windows.findIndex((ww) => ww.id === w.id);
                    if (index === -1) {
                        setWindows([w, ...windows]);
                    } else {
                        w.hidden = false;
                        const newWindows = windows.concat();
                        newWindows.unshift(...newWindows.splice(index, 1));
                        setWindows(newWindows);
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
                            w.expanded = false;
                        }}
                        onHide={() => {
                            w.hidden = !w.hidden;
                            setWindows(windows.concat());
                        }}
                        onExpand={() => {
                            w.expanded = !w.expanded;
                            setWindows(windows.concat());
                        }}
                        onActive={() => {
                            const newWindows = windows.concat();
                            newWindows.unshift(...newWindows.splice(i, 1));
                            setWindows(newWindows);
                        }}
                    >
                        {w.children}
                    </Window>
                ))}
            </div>
        </div>
    );
}

export default App;
