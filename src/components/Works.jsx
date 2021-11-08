import React from 'react';
import { works } from '../data';



export default function Works() {
    return (
        <div className="works">
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
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
