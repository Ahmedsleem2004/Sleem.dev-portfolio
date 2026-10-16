import { memo } from 'react';
import Portrait from './Portrait.jsx';

function PageFlip() {
  return (<><section id="flip" aria-label="Page flip sequence" style={{"padding":"0"}}><div className="pfw" id="pfw"><div className="pfl" id="pfl"><div className="pg"><h3>Ahmed<br />Sleem</h3><p>Front-end developer building responsive, interactive interfaces with React.</p><div className="sh"></div></div><div className="pg"><h3>About</h3><p>Focused on React, modern UI development and turning design ideas into usable interfaces.</p><div className="sh"></div></div><div className="pg"><h3>Skills</h3><p>HTML5, CSS3, JavaScript, React.js, Tailwind CSS, REST APIs, Git and GitHub. Exploring Next.js.</p><div className="sh"></div></div><div className="pg"><h3>Selected projects</h3><p>Seven entries, each labelled by status. Details are still being verified.</p><a className="btn p" style={{"alignSelf":"flex-start"}} href="#projects">View projects</a><div className="sh"></div></div></div></div></section></>);
}
export default memo(PageFlip);
