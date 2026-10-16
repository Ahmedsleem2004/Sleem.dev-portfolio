import { memo } from 'react';
import Portrait from './Portrait.jsx';

function VerticalGallery() {
  return (<><section id="vg" aria-label="Vertical gallery"><div className="wrap"><div className="vc" id="vc"></div></div></section></>);
}
export default memo(VerticalGallery);
