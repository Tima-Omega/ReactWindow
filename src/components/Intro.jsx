import React from 'react';
import { Animated } from 'react-animated-css';

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro__inner">
                <Animated animationIn="fadeInDown" animationInDuration={2000}>
                    <div className="intro__title"> Hi <br /> I'm Timur <br /> <span>&lt;</span> FrontEnd Developer <span>/&gt;</span></div>
                </Animated>
            </div>
        </div>
    );
}
