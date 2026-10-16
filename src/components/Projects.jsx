import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Projects() {
  return (<><section id="projects" aria-labelledby="ph"><div className="phead"><h2 className="disp big" id="ph">Projects</h2><p className="mut" style={{"maxWidth":"60ch","marginTop":"14px"}}>Mockups below are placeholders until real screenshots are added. Links are shown only once verified.</p></div><div className="pin" id="pin"><div className="track" id="track"></div></div></section></>);
}
export default memo(Projects);
