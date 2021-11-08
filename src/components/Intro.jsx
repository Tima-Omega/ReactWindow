import React from 'react';
import { Animated } from 'react-animated-css';

export default function Intro() {
    return (
        <div className="intro">
            <div className="intro__inner">
                <Animated animationIn="fadeIn" animationInDuration={800} animationInDelay={800}>
                    <div className="intro__title">
                        Frontend Developer
                        <br />
                        <Animated
                            animationIn="fadeIn"
                            animationInDuration={800}
                            animationInDelay={1600}
                        >
                            <span>Timur Rustamov</span>
                        </Animated>
                    </div>
                </Animated>
                <Animated animationIn="fadeIn" animationInDuration={800} animationInDelay={2400}>
                    <div className="intro__arrow">
                        <img src="/img/arrow.svg" alt="" />
                        <img src="/img/arrow.svg" alt="" />
                        <img src="/img/arrow.svg" alt="" />
                    </div>
                </Animated>
            </div>
        </div>
    );
}
