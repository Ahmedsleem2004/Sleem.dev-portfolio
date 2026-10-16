import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Hero() {
  return (<><section id="hero" aria-label="Introduction"><div><h1 className="disp"><span>Ahmed</span><span className="f">Sleem</span></h1><p className="role">Front-End Developer · Creative Web Experiences</p><p className="quote">I don't just build websites. I create digital experiences.</p><p className="sup">I build responsive interfaces and interactive web experiences with React, modern front-end technologies, and a strong focus on design, usability, and performance.</p><div className="ctas"><a className="btn p" href="#projects">Explore my work</a><a className="btn" href="#contact">Let's connect</a></div></div><Portrait id="pt1" imgId="img1" alt="Portrait of Ahmed Sleem" /><div className="scroll"><b></b>Scroll</div><div className="coord">30.0444° N, 31.2357° E<br />Cairo, Egypt</div></section></>);
}
export default memo(Hero);
