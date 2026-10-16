import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Dialogs() {
  return (<><dialog id="dlg" aria-labelledby="dt"><button className="x" id="dx">Close</button><div className="mut" id="dc"></div><h3 id="dt"></h3><p id="dd"></p><dl><dt>Stack</dt><dd id="ds"></dd><dt>Status</dt><dd id="dst"></dd><dt>Live demo</dt><dd id="dl"></dd><dt>GitHub</dt><dd id="dg"></dd><dt>My role</dt><dd id="dr"></dd></dl></dialog><dialog id="gd" aria-label="Enlarged study"><button className="x" id="gx">Close</button><div id="gb" style={{"clear":"both","marginTop":"12px"}}></div><p className="mut" id="gc"></p></dialog></>);
}
export default memo(Dialogs);
