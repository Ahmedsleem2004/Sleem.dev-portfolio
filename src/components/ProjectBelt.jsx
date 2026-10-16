import { memo } from 'react';
import Portrait from './Portrait.jsx';

function ProjectBelt() {
  return (<><section id="belt" aria-labelledby="bth" style={{"paddingLeft":"0","paddingRight":"0"}}><div className="wrap" style={{"padding":"0 clamp(16px,5vw,72px)"}}><h2 className="disp big" id="bth">Project belt</h2></div><div className="bl" id="bl"><div className="bs" id="bs"></div></div><div className="cn"><button id="bp" aria-label="Previous project">Prev</button><button id="bn" aria-label="Next project">Next</button></div><div className="cd" id="bi" aria-live="polite"></div></section></>);
}
export default memo(ProjectBelt);
