import { memo } from 'react';
import Portrait from './Portrait.jsx';

function About() {
  return (<><section id="about" aria-labelledby="ah"><div className="wrap"><h2 className="disp big rv" id="ah">Interfaces with<br />intent.</h2><div className="about"><Portrait id="pt2" imgId="img2" alt="Ahmed Sleem, second portrait composition" style={{ position: 'relative' }}><span className="float" style={{"top":"8%","right":"-6%"}} data-d="40">&lt;React /&gt;</span><span className="float" style={{"bottom":"12%","left":"-8%"}} data-d="-30">responsive()</span></Portrait><div><p className="rv">Ahmed Sleem is a Front-End Developer focused on React, modern UI development, and responsive web experiences. He is drawn to interfaces that feel considered: clear structure, purposeful motion, and layouts that hold up on any screen.</p><p className="rv">His approach starts with the design idea and turns it into something people can actually use. That means translating layouts into clean components, integrating REST APIs, and keeping the code maintainable as it grows.</p><p className="rv">He cares about performance and user experience as much as visuals, and keeps developing his technical skills, currently exploring Next.js. His goal is to build front-end work for products and teams where thoughtful interfaces matter.</p></div></div></div></section></>);
}
export default memo(About);
