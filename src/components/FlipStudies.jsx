import { memo } from 'react';
import Portrait from './Portrait.jsx';

function FlipStudies() {
  return (<><section id="fg" aria-labelledby="fh"><div className="wrap"><h2 className="disp big" id="fh">Flip studies</h2><p className="mut" style={{"marginTop":"14px"}}>Tap or press Enter to flip a card.</p><div className="fgr" id="fgr"></div></div></section></>);
}
export default memo(FlipStudies);
