import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Navbar() {
  return (<><nav aria-label="Main"><a className="logo" href="#hero">AHMED SLEEM</a><button id="mb" aria-expanded="false" aria-controls="menu">Menu</button><ul id="menu"><li><a href="#about">About</a></li><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li></ul><div className="ctl"><div className="lg" role="group" aria-label="Language"><button data-l="en" aria-pressed="true">EN</button><button data-l="ar" aria-pressed="false" lang="ar">عربي</button></div><button id="tg" aria-label="Switch to light mode" aria-pressed="false"><svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg><svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg></button></div></nav></>);
}
export default memo(Navbar);
