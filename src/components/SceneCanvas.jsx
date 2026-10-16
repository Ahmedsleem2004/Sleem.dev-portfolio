import { memo } from 'react';
import Portrait from './Portrait.jsx';

function SceneCanvas() {
  return (<><canvas id="gl" aria-hidden="true"></canvas></>);
}
export default memo(SceneCanvas);
