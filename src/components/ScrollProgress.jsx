import { memo } from 'react';
import Portrait from './Portrait.jsx';

function ScrollProgress() {
  return (<><div id="prog" aria-hidden="true"></div></>);
}
export default memo(ScrollProgress);
