import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SRC = `${import.meta.env.BASE_URL}video/loader.mp4`;

/**
 * Cinematic intro: black pre-loader -> trimmed Kling clip (starts on the anime frame)
 * -> splatter hold -> exit into the portfolio. Always exits on error, stall, timeout or Skip.
 */
export default function Loader({ onExit }) {
  const root = useRef(null);
  const exited = useRef(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const ld = root.current;
    if (!ld) return;
    const fire = () => { if (!exited.current) { exited.current = true; onExit(); } };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { fire(); setGone(true); return; }

    const q = (s) => ld.querySelector(s);
    const mv = q('#mv'), bg = q('#bgv'), vf = q('#vf'), tt = q('#tt'), pre = q('#pre'), pli = q('#pli');
    const cv = q('#pc'), cx = cv.getContext('2d');
    const R = gsap.utils.random;
    const ac = new AbortController();
    const on = (t, e, f) => t.addEventListener(e, f, { signal: ac.signal });
    const timers = [], calls = [];
    let out = false, held = false, playing = false, dead = false, last = -1, stall = 0, raf = 0, W = 0, H = 0, gt = null;
    const later = (f, ms) => { const t = setTimeout(() => { if (!dead) f(); }, ms); timers.push(t); return t; };
    const dc = (s, f) => { const c = gsap.delayedCall(s, () => { if (!dead) f(); }); calls.push(c); return c; };

    gsap.set([ld, vf, tt, pre, pli], { clearProps: 'all' });
    vf.classList.remove('hold');
    pre.style.display = '';
    document.body.style.overflow = 'hidden';
    [mv, bg].forEach((v) => {
      v.muted = true; v.defaultMuted = true; v.playsInline = true; v.loop = false;
      v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', '');
      v.disablePictureInPicture = true;
    });

    const glitch = (el, n = 6) => {
      const tl = gsap.timeline();
      for (let i = 0; i < n; i++) tl.set(el, { x: R(-10, 10), skewX: R(-12, 12), textShadow: `${R(-8, 8)}px 0 #ff1738,${R(-8, 8)}px 0 #fff`, opacity: R(0.5, 1) }, i * 0.05);
      return tl.set(el, { x: 0, skewX: 0, opacity: 1, clearProps: 'textShadow' }, n * 0.05);
    };
    const exit = () => {
      if (out || dead) return; out = true; gt && gt.kill();
      try { mv.pause(); bg.pause(); } catch (e) { /* ignore */ }
      fire();
      const tl = gsap.timeline({ onComplete: () => { cancelAnimationFrame(raf); document.body.style.overflow = ''; setGone(true); } });
      for (let i = 0; i < 7; i++) tl.to(vf, { x: R(-9, 9), y: R(-7, 7), rotation: R(-0.7, 0.7), duration: 0.045 }, i * 0.045);
      tl.to(vf, { x: 0, y: 0, rotation: 0, scale: 1.05, duration: 0.25, ease: 'power2.out' }, 0.32)
        .add(() => glitch(tt), 0.1).to(ld, { opacity: 0, duration: 0.9, ease: 'power2.inOut' }, 0.3);
    };
    const hold = () => {
      if (held || out) return; held = true; gt && gt.kill(); bg.pause();
      try { bg.currentTime = mv.currentTime; } catch (e) { /* ignore */ }
      vf.classList.add('hold');
      gsap.fromTo(tt, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5 });
      dc(1.0, () => glitch(tt)); dc(1.9, exit);
    };
    const amb = () => {
      gt = dc(R(0.9, 1.8), () => {
        if (out || held) return;
        gsap.timeline({ onComplete: amb }).set(vf, { x: R(-8, 8), clipPath: 'inset(30% 0 52% 0)' })
          .set(vf, { x: R(-8, 8), clipPath: 'inset(62% 0 12% 0)' }, '+=.04').set(vf, { x: 0, clearProps: 'clipPath' }, '+=.05');
      });
    };
    const P = Array.from({ length: innerWidth < 700 ? 32 : 70 }, () => ({ x: Math.random(), y: Math.random(), s: Math.random() * 2 + 0.6, v: Math.random() * 0.06 + 0.02, d: Math.random() * 6 }));
    const fit = () => {
      const d = Math.min(devicePixelRatio || 1, 1.5);
      W = cv.width = innerWidth * d; H = cv.height = innerHeight * d;
      ld.style.setProperty('--s', Math.max(innerWidth / 200, innerHeight / 268) * 1.05);
    };
    const draw = (t) => {
      cx.clearRect(0, 0, W, H);
      P.forEach((p) => {
        p.y -= p.v * 0.016; if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        cx.fillStyle = `rgba(255,${(40 + p.s * 20) | 0},60,${0.3 + 0.45 * Math.sin(t / 300 + p.d) ** 2})`;
        cx.beginPath(); cx.arc((p.x + Math.sin(t / 900 + p.d) * 0.01) * W, p.y * H, p.s * W / 900 + 0.6, 0, 6.3); cx.fill();
      });
    };
    const loop = (t) => {
      raf = requestAnimationFrame(loop); draw(t);
      if (playing && !held && !out) { const c = mv.currentTime; if (c !== last) { last = c; stall = t; } else if (t - stall > 3500) exit(); }
    };
    // Sound: try unmuted first; if the browser blocks it, play muted and unmute on the first tap/click/key.
    const startMain = async () => { mv.muted = false; try { await mv.play(); } catch (e) { mv.muted = true; try { await mv.play(); } catch (e2) { exit(); } } };
    ['pointerdown', 'touchend', 'click', 'keydown'].forEach((t) => on(window, t, () => { if (!out && mv.muted && !mv.paused) mv.muted = false; }));
    const begin = () => {
      gsap.to(pre, { opacity: 0, duration: 0.55, ease: 'power2.out', onComplete: () => { pre.style.display = 'none'; } });
      dc(0.3, () => {
        if (out) return; playing = true; stall = performance.now();
        startMain(); // tries sound first; falls back to muted, then to skipping the intro if playback is blocked
        const b = bg.play(); if (b && b.catch) b.catch(() => {});
        later(amb, 900);
      });
    };

    const ready = new Promise((res, rej) => {
      if (mv.readyState >= 2) return res();
      on(mv, 'loadeddata', res); on(mv, 'canplay', res); later(rej, 7000);
    });
    on(mv, 'error', exit); on(mv, 'ended', hold);
    on(q('#sk'), 'click', exit);
    on(window, 'keydown', (e) => { if (e.key === 'Escape') exit(); });
    on(window, 'resize', fit);
    mv.src = SRC; bg.src = SRC; mv.load(); bg.load();
    fit(); raf = requestAnimationFrame(loop);
    gsap.to(pli, { scaleX: 1, duration: 1.15, ease: 'power2.inOut' });
    dc(0.6, () => glitch(pre.querySelector('h2'), 5));
    Promise.all([new Promise((r) => later(r, 1250)), ready]).then(begin, exit);
    later(exit, 15000);

    return () => {
      dead = true; ac.abort(); timers.forEach(clearTimeout); calls.forEach((c) => c.kill());
      cancelAnimationFrame(raf); gsap.killTweensOf([ld, vf, tt, pre, pli]);
      try { mv.pause(); bg.pause(); mv.removeAttribute('src'); bg.removeAttribute('src'); mv.load(); bg.load(); } catch (e) { /* ignore */ }
    };
  }, [onExit]);

  if (gone) return null;
  return (<div ref={root} id="ld" role="status" aria-label="Loading"><video className="bgv" id="bgv" muted playsInline preload="auto" aria-hidden="true" tabIndex="-1"></video><div className="tint"></div><i className="sm s1"></i><i className="sm s2"></i><div className="vf" id="vf"><video id="mv" muted playsInline preload="auto" aria-hidden="true" tabIndex="-1"></video><div className="gl"></div><div className="gr"></div><div className="bm"></div></div><div className="tt" id="tt"><h1>AHMED SLEEM</h1><p>Front-End Developer</p></div><div className="scan"></div><div className="pre" id="pre"><div><h2><span>Ahmed</span>{' '}<b>Sleem</b></h2><div className="pl"><i id="pli"></i></div><p>Initializing experience...</p></div></div><canvas id="pc"></canvas><button className="skip" id="sk">Skip intro</button></div>);
}
