import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Journey() {
  return (<><section id="journey" aria-labelledby="jh"><div className="wrap"><h2 className="disp big rv" id="jh">Learning path</h2><div className="tl" id="tl"><i></i><div><h3>Structure and style</h3><p>HTML5 and CSS3 as the base for every interface.</p></div><div><h3>Behavior</h3><p>JavaScript for interaction, state, and data handling.</p></div><div><h3>Components</h3><p>React.js and Tailwind CSS for reusable, responsive UI.</p></div><div><h3>Connected interfaces</h3><p>REST API integration, Git and GitHub workflows.</p></div><div><h3>Next</h3><p>Next.js, plus deeper motion and 3D work on the web.</p></div></div></div></section></>);
}
export default memo(Journey);
