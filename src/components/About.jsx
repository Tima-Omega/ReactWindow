import React from 'react';

export default function About() {
	return (
		<div className="about">
			<div className="about__top">
				<div  className="about__profile">
					<img src="/img/profile.jpg" alt=""/>
				</div>
				<div className="about__name">Timur Rustamov</div>
			</div>
			<div className="about__main">
				<div className="about__title">Here are a few technologies I’ve been working with:</div>
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