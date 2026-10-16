import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Puzzle() {
  return (<><section id="puzzle" aria-labelledby="zh"><div className="wrap"><h2 className="disp big" id="zh">Decode my<br />digital world</h2><div className="row"><div id="pzs"><ul id="pz"></ul></div><div className="pp" aria-live="polite"><img id="pi" className="pim" alt="" width="480" height="480" /><h3 id="pt"></h3><p id="px"></p><ul className="tags" id="pg"></ul><div className="lgr" id="pl" style={{"marginTop":"14px"}}></div></div></div></div></section></>);
}
export default memo(Puzzle);
