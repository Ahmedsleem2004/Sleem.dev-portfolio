import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Skills() {
  return (<><section id="skills" aria-labelledby="sh"><div className="wrap"><h2 className="disp big rv" id="sh">Toolkit</h2><p className="mut" style={{"marginTop":"14px"}}>Drag, swipe, use the arrows, or press the left and right arrow keys.</p><div className="car" id="car" tabIndex="0" role="group" aria-label="Skills carousel"><div className="stg" id="stg"></div></div><div className="cn"><button id="pv" aria-label="Previous skill">Prev</button><button id="nx" aria-label="Next skill">Next</button></div><div className="cd" aria-live="polite"><h3 id="cn"></h3><div className="mut" id="cc"></div><p id="cx"></p></div><h3 className="lwh">Tech stack</h3><ul className="lw" id="lw"></ul><p className="mut rv" style={{"maxWidth":"56ch","marginTop":"14px"}}>Grouped by what each tool is used for. Dashed outlines mark technologies still being explored.</p><div className="sk" id="skg"></div></div></section></>);
}
export default memo(Skills);
