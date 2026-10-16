import { useState } from 'react';

// Permanent portrait, served from public/images/ahmed-sleem.webp.
// BASE_URL keeps the path correct in dev, on Vercel ('/') and on GitHub Pages ('/repo/').
const PORTRAIT_SRC = `${import.meta.env.BASE_URL}images/ahmed-sleem.webp`;

export default function Portrait({ id, imgId, alt, style, children }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`portrait${missing ? '' : ' has'}`} id={id} style={style}>
      <span className="frame2" />
      <div className="ph">
        <img id={imgId} src={PORTRAIT_SRC} alt={alt} decoding="async" fetchpriority={id === 'pt1' ? 'high' : undefined} onError={() => setMissing(true)} />
        <div className="phtxt">
          <strong>Portrait placeholder</strong>
          <p>Portrait file not found. Add <code>public/images/ahmed-sleem.webp</code>.</p>
        </div>
      </div>
      {children}
    </div>
  );
}
