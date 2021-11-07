import React from 'react';
import { works } from '../data';

export default function Works() {
    return (
        <div className="works">
            <div className="works__title">Preview of my works</div>
            <div className="works__content">
                {works.map((w) => {
                    return (
                        <a
                            href={w.href}
                            key={w.id}
                            className="works__link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
								src={w.img} 
								alt="" />
                            <span className="works__name">{w.title}</span>
                            {/* <span className="works__desc">{w.desc}</span> */}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
