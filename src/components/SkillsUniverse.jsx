import { memo } from 'react';
import Portrait from './Portrait.jsx';

function SkillsUniverse() {
  return (<><section id="orb" aria-labelledby="obh"><div className="wrap"><h2 className="disp big" id="obh">Skills universe</h2><div className="orw"><canvas id="oc" aria-label="3D orbit of skills. Use the buttons to choose a skill." role="img"></canvas><div><ul className="ol" id="ol"></ul><div className="pp" aria-live="polite" style={{"minHeight":"8em"}}><h3 id="on"></h3><p id="od"></p></div></div></div></div></section></>);
}
export default memo(SkillsUniverse);
