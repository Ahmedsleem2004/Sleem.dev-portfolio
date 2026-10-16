import { memo } from 'react';
import Portrait from './Portrait.jsx';

function Marquees() {
  return (<><section id="mqs" aria-label="Skills and keywords" style={{"padding":"8vh 0"}}><div className="mq" id="mqa"></div><div className="mq slow" id="mqc1" aria-hidden="true" style={{"marginTop":"4vh"}}></div><div className="mq rev slow" id="mqc2" aria-hidden="true"></div></section></>);
}
export default memo(Marquees);
