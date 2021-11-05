import React, { Component } from 'react';

export default class Window extends Component {
    state = {
        movable: false,
        left: 0,
        top: 0,
    };

    onMouseUp = () => {
        console.log('mouseup');
        this.setState({ ...this.state, movable: false });
    };

    onMouseDown = () => {
        console.log('mousedown');
        this.setState({ ...this.state, movable: true });
    };

    onMouseMove = (e) => {
        const { movable } = this.state;

        if (!movable) {
            return;
        }

        console.log('mousemove');

        const { left, top } = this.state;

        this.setState({ ...this.state, left: left + e.movementX, top: top + e.movementY });

        console.log(e.movementX, e.movementY);
    };

    componentDidMount() {
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('mousemove', this.onMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('mousemove', this.onMouseMove);
    }

    render() {
        const {
            title,
            children,
            count = 0,
            index = 0,
            onClose,
            onHide,
            onExpand,
            onActive,
            hidden,
            expanded,
        } = this.props;
        const { left, top } = this.state;
        return (
            <div
                className={
                    'window' +
                    (index === 0 ? ' active' : '') +
                    (hidden ? ' hidden' : '') +
                    (expanded ? ' expanded' : '')
                }
                style={{ left, top, zIndex: (count - index) * 10 }}
            >
                <div
                    className="window__head"
                    onMouseUp={this.onMouseUp}
                    onMouseDown={this.onMouseDown}
                    onClick={() => {
                        if (index !== 0) {
                            onActive();
                        }
                    }}
                >
                    <div className="window__btns">
                        <div className="window__btn window__btn--red" onClick={onClose}></div>
                        <div className="window__btn window__btn--yellow" onClick={onHide}></div>
                        <div className="window__btn window__btn--green" onClick={onExpand}></div>
                    </div>
                    <div className="window__title">{title}</div>
                </div>
                <div className="window__content">{children}</div>
            </div>
        );
    }
}

// export default function Window() {
//     const [movable, setMovable] = useState(true);
//     const [left, setLeft] = useState(0);
//     const [top, setTop] = useState(0);

//     const onMouseUp = () => {
//         console.log('mouseup');
//         setMovable(false);
//     };

//     const onMouseDown = () => {
//         console.log('mousedown');
//         setMovable(true);
//     };

//     const onMouseMove = useCallback(
//         (e) => {
//             console.log('mousemove');

//             if (movable) {
//                 return;
//             }

//             setLeft(left + e.movementX);
//             setTop(top + e.movementY);

//             console.log(e.movementX, e.movementY);
//         },
//         [movable, left, top, setLeft, setTop],
//     );

//     useEffect(() => {
//         window.addEventListener('mouseup', onMouseUp);
//         return () => {
//             window.removeEventListener('mouseup', onMouseUp);
//         };
//     }, []);

//     useEffect(() => {
//         if (movable) {
//             window.addEventListener('mousemove', onMouseMove);
//         } else {
//             window.removeEventListener('mousemove', onMouseMove);
//         }
//         return window.removeEventListener('mousemove', onMouseMove);
//     }, [movable, onMouseMove]);
// }
