import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Lab() {
  return (<><section id="lab" aria-labelledby="lh"><div className="wrap"><h2 className="disp big" id="lh">Interaction lab</h2><div className="lab"><div><h3>Magnetic</h3><div className="lb"><button className="mag">Pull me</button></div></div><div><h3>Particle field</h3><canvas id="pf" aria-label="Particles that react to the pointer" role="img"></canvas></div><div><h3>Deconstruct</h3><div className="xd" id="xd"><div className="xs"><div className="ly l0"></div><div className="ly l1">nav</div><div className="ly l2">Hello</div><div className="ly l3">CTA</div><div className="ly l4">card</div></div></div><button className="btn" id="xb" aria-pressed="false" style={{"background":"none","color":"inherit","font":"inherit","cursor":"pointer","marginTop":"8px"}}>Separate layers</button></div></div></div></section></>);
}
export default memo(Lab);
