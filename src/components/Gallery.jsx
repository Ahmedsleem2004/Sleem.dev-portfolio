import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Gallery() {
  return (<><section id="gallery" aria-labelledby="gh"><div className="wrap"><h2 className="disp big" id="gh">Interface studies</h2><p className="mut" style={{"maxWidth":"58ch","marginTop":"14px"}}>Original illustrations drawn for this page. They are not screenshots of real projects. Replace them with real screenshots in <code>public/images/</code>. Select one to enlarge.</p><div className="gal" id="gal"></div></div></section></>);
}
export default memo(Gallery);
