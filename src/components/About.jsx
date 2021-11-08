import React from 'react';

const Contacts = [
    {
        id: 'git',
        icon: '/img/git.svg',
        href: 'https://github.com/Tima-Omega',
    },
    {
        id: 'tg',
        icon: '/img/tg.svg',
        href: 'https://t.me/TimaOmega',
    },
    {
        id: 'mail',
        icon: '/img/mail.svg',
        href: 'mailto:tima_omega@outlook.com',
    },
    {
        id: 'vk',
        icon: '/img/vk.svg',
        href: 'https://vk.com/tima_omega',
    },
    {
        id: 'inst',
        icon: '/img/inst.svg',
        href: 'https://www.instagram.com/tima.omega/',
    },
];

export default function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__profile">
                    <img src="/img/profile.jpg" alt="" />
                </div>
                <div className="about__name">Timur Rustamov</div>
                <div className="about__contacts">
                    {Contacts.map((c) => (
                        <a key={c.id} href={c.href} className="about__link">
                            <img src={c.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="about__main">
                <div className="about__desc">
                    I'm Frontend Developer located in Saint-Petersburg, Russia. <br /> <br />
                    Freelancer.
                    <br /> <br />
					I have done over 20 projects of varying complexity. <br /> <br />
					I create successful websites that are fast, easy to use, and built
                    with best practices. The main area of my expertise is front-end development,
                    HTML, CSS, JS, building small and medium web apps, animations, web pages with
                    adaptive, responsive, cross-browser layout using modern web technologies.
                </div>
                <div className="about__title">Here are a technologies I’ve been working with:</div>
                <div className="about__stack">
                    <img src="/img/stack/html.svg" alt="" className="about__tech" />
                    <img src="/img/stack/css.svg" alt="" className="about__tech" />
                    <img src="/img/stack/sass.svg" alt="" className="about__tech" />
                    <img src="/img/stack/jquery.svg" alt="" className="about__tech" />
                    <img src="/img/stack/js.svg" alt="" className="about__tech" />
                    <img src="/img/stack/react.svg" alt="" className="about__tech" />
                    <img src="/img/stack/bootstrap.svg" alt="" className="about__tech" />
                    <img src="/img/stack/tailwind.svg" alt="" className="about__tech" />
                    <img src="/img/stack/gulp.svg" alt="" className="about__tech" />
                    <img src="/img/stack/webpack.svg" alt="" className="about__tech" />
                    <img src="/img/stack/node.svg" alt="" className="about__tech" />
                    <img src="/img/stack/git.svg" alt="" className="about__tech" />
                    <img src="/img/stack/gitlab.svg" alt="" className="about__tech" />
                    <img src="/img/stack/vscode.svg" alt="" className="about__tech" />
                    <img src="/img/stack/figma.svg" alt="" className="about__tech" />
                </div>
            </div>
        </div>
    );
}
