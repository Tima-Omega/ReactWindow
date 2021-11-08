import React, { Component } from 'react';

export default class Window extends Component {
    state = {
        movable: false,
        left: 0,
        top: 0,
    };

    onMouseUp = () => {
        this.setState({ ...this.state, movable: false });
    };

    onMouseDown = () => {
        this.setState({ ...this.state, movable: true });
    };

    onMouseMove = (e) => {
        const { movable } = this.state;

        if (!movable) {
            return;
        }

        const { left, top } = this.state;

        this.setState({ ...this.state, left: left + e.movementX, top: top + e.movementY });
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
            width,
            height,
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
                style={{ left, top, zIndex: (count - index) * 10, width, height }}
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
