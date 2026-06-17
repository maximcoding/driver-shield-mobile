// Global CSS string injected by DS component. Keep in sync with design system.
// Uses CSS variables from tokens (single source of truth); no inline styles in components.

import { tokensToCssVars } from "./tokens.js";

const rootVars = tokensToCssVars();

export const globalStyles = `
:root{${rootVars}}
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;500;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
h1,h2,h3,h4,h5,h6{overflow:visible;line-height:var(--t-lhSafe);padding-bottom:var(--t-pbDescender);}
p{overflow:visible;line-height:var(--t-lhSafe);padding-bottom:var(--t-pbDescenderBody);}
span{overflow:visible;line-height:inherit;}
label{line-height:1.4;display:block;}
button{cursor:pointer;border:none;background:none;font-family:inherit;padding:0;line-height:1.4;}
input,select,textarea{outline:none;border:none;background:none;font-family:inherit;width:100%;color:inherit;line-height:1.5;}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,[tabindex="0"]:focus-visible{outline:2px solid var(--t-pri);outline-offset:2px;}
.ds-skip-link{position:absolute;left:-9999px;top:0;z-index:9999;padding:8px 16px;background:var(--t-pri);color:var(--t-white);font-family:var(--t-fB);font-size:var(--t-fsBase);font-weight:600;border-radius:var(--t-r);text-decoration:none;}
.ds-skip-link:focus{left:16px;top:16px;}
::-webkit-scrollbar{display:none;}
@keyframes protPulse{0%{box-shadow:0 0 0 0 rgba(61,127,255,0.6),0 0 0 0 rgba(61,127,255,0.2);}100%{box-shadow:0 0 0 22px rgba(61,127,255,0),0 0 0 44px rgba(61,127,255,0);}}
@keyframes spin{to{transform:rotate(360deg);}}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}
@keyframes slideUp{from{transform:translateY(100%);}to{transform:translateY(0);}}
@keyframes scaleIn{from{opacity:0;transform:scale(0.96);}to{opacity:1;transform:scale(1);}}
@keyframes dockSlide{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
@keyframes arcSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes splashRing{0%{transform:scale(1);opacity:0.7;}100%{transform:scale(3.2);opacity:0;}}
@keyframes splashBreath{0%,100%{transform:scale(1);}50%{transform:scale(1.07);}}
@keyframes splashGrow{0%{opacity:0;transform:scale(0) rotate(-25deg);}50%{opacity:1;transform:scale(1.35) rotate(6deg);}72%{transform:scale(0.88) rotate(-3deg);}86%{transform:scale(1.08) rotate(1deg);}100%{opacity:1;transform:scale(1) rotate(0deg);}}
@keyframes splashFlash{0%{opacity:0;transform:scale(1);}40%{opacity:1;transform:scale(1.6);}100%{opacity:0;transform:scale(2.4);}}
@keyframes splashEntry{0%{opacity:0;transform:translateY(14px);}100%{opacity:1;transform:translateY(0);}}
@keyframes splashArc{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes splashArcRev{from{transform:rotate(0deg);}to{transform:rotate(-360deg);}}
@keyframes textShine{0%{background-position:-300% center;}100%{background-position:300% center;}}
@keyframes bgGlow{0%,100%{opacity:0.55;}50%{opacity:1;}}
.spl-shine{background:linear-gradient(90deg,#e2eaff 20%,#ffffff 48%,#7aacff 52%,#e2eaff 80%);background-size:300% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:textShine 3s linear infinite;}
.spl-bg-glow{animation:bgGlow 3s ease-in-out infinite;}
.spl-grow{animation:splashGrow 0.85s cubic-bezier(0.34,1.2,0.64,1) both;}
.spl-flash{animation:splashFlash 0.6s ease-out both;pointer-events:none;}
.spl-wi{animation:splashEntry 0.45s ease both;}
.pp{animation:protPulse 2s ease-out infinite;}
.spin{animation:spin 1.1s linear infinite;}
.fu{animation:fadeUp 0.32s ease both;}
.blink{animation:blink 1.8s ease-in-out infinite;}
.su{animation:slideUp 0.38s cubic-bezier(0.32,0.72,0,1) both;}
.si{animation:scaleIn 0.22s ease both;}
.ds-in{animation:dockSlide 0.4s ease both;}
.arc{animation:arcSpin 1.4s linear infinite;transform-origin:50% 50%;}
.spl-ring{animation:splashRing 2.4s ease-out infinite;}
.spl-breath{animation:splashBreath 3s ease-in-out infinite;}
.spl-entry{animation:splashEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) both;}
.spl-arc{animation:splashArc 3s linear infinite;}
.spl-arc-rev{animation:splashArcRev 5s linear infinite;}
.ds-screen-root{display:flex;flex-direction:column;min-height:100%;padding:0 var(--t-pagePadX) var(--t-pagePadBottom);}
.ds-screen-content{padding:var(--t-pagePadTop) var(--t-pagePadX) var(--t-pagePadBottom);}
.ds-screen-content--compact{padding-left:var(--t-pagePadXCompact);padding-right:var(--t-pagePadXCompact);}
.ds-screen-center{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:0;}
.ds-screen-actions{display:flex;flex-direction:column;gap:8px;}
.ds-icon-badge--error{width:var(--t-badgeLgSize);height:var(--t-badgeLgSize);border-radius:var(--t-badgeLgR);background:var(--t-erD);border:var(--t-erBorder);box-shadow:var(--t-erShadow);display:flex;align-items:center;justify-content:center;margin-bottom:24px;}
.ds-label-uppercase{font-family:var(--t-fB);font-size:var(--t-fsDetail);font-weight:400;color:var(--t-t2);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;}
.ds-heading-hero{font-family:var(--t-fD);font-size:26px;font-weight:800;color:var(--t-t1);letter-spacing:-0.02em;margin-bottom:14px;}
.ds-heading-hero--sm{font-size:24px;}
.ds-body-copy{font-family:var(--t-fB);font-size:var(--t-fsBase);color:var(--t-t2);max-width:260px;}
.ds-body-copy-sm{font-family:var(--t-fB);font-size:var(--t-fsSm);color:var(--t-t3);text-align:center;margin-top:2px;}
.ds-frame{width:390px;height:844px;background:var(--t-bg);border-radius:48px;overflow:hidden;position:relative;box-shadow:0 48px 96px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.07);display:flex;flex-direction:column;}
.ds-status-bar{height:44px;background:var(--t-bg);flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0 24px;padding-top:8px;}
.ds-status-time{font-family:var(--t-fM);font-size:var(--t-fsDetail);font-weight:600;color:var(--t-t1);}
.ds-frame-inner{flex:1;position:relative;}
.ds-scroll-area{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none;}
.ds-scroll-area--with-dock{padding-bottom:var(--t-scrollAreaWithDockBottom);}
.ds-status-notch{width:120px;height:30px;background:#000;border-radius:999px;margin-bottom:4px;}
.ds-status-icons{display:flex;gap:6px;align-items:center;}
.ds-icon{display:block;}
.ds-row{display:flex;align-items:flex-start;gap:var(--t-rowGap);}
.ds-row-pad{padding:var(--t-rowV) var(--t-rowH);}
.ds-row-pad-sm{padding:var(--t-rowVSm) var(--t-rowH);}
.ds-row-pad-lg{padding:var(--t-rowVLg) var(--t-rowH);}
.ds-icon-slot{width:24px;height:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
.ds-icon-slot-40{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
.ds-content{flex:1;min-width:0;}
.ds-right{flex-shrink:0;}
.ds-card{background:var(--t-s);border:1px solid var(--t-bd);border-radius:var(--t-rLg);}
.ds-banner{display:flex;align-items:center;gap:var(--t-rowGap);padding:var(--t-rowVSm) var(--t-rowH);border-radius:var(--t-r);margin-bottom:var(--t-rowVSm);text-align:left;}
.ds-banner--success{background:var(--t-suD);border:1px solid var(--t-suB);}
.ds-banner--success .ds-banner__title,.ds-banner--success .ds-banner__text,.ds-banner--success .ds-banner__dismiss{color:var(--t-su_);}
.ds-banner--error{background:var(--t-erD);border:1px solid var(--t-erB);}
.ds-banner--error .ds-banner__title,.ds-banner--error .ds-banner__text,.ds-banner--error .ds-banner__dismiss{color:var(--t-er);}
.ds-banner--warning{background:var(--t-waD);border:1px solid var(--t-waB);}
.ds-banner--warning .ds-banner__title,.ds-banner--warning .ds-banner__text,.ds-banner--warning .ds-banner__dismiss{color:var(--t-wa);}
.ds-banner--info{background:var(--t-infD);border:1px solid var(--t-infB);}
.ds-banner--info .ds-banner__title,.ds-banner--info .ds-banner__text,.ds-banner--info .ds-banner__dismiss{color:var(--t-inf);}
.ds-banner--offline{background:var(--t-ofD);border:1px solid var(--t-ofB);}
.ds-banner--offline .ds-banner__title,.ds-banner--offline .ds-banner__text,.ds-banner--offline .ds-banner__dismiss{color:var(--t-of_);}
.ds-banner--permission{background:var(--t-perD);border:1px solid var(--t-perB);}
.ds-banner--permission .ds-banner__title,.ds-banner--permission .ds-banner__text,.ds-banner--permission .ds-banner__dismiss{color:var(--t-per);}
.ds-banner--floating{margin-bottom:0;padding:10px var(--t-rowH);align-items:center;}
.ds-banner--floating .ds-banner__title{margin:0;}
.ds-banner--floating.ds-banner--warning{background:var(--t-s2);border:1px solid var(--t-waB);}
.ds-banner--floating.ds-banner--error{background:var(--t-s2);border:1px solid var(--t-erB);}
.ds-banner--floating.ds-banner--success{background:var(--t-s2);border:1px solid var(--t-suB);}
.ds-banner--floating.ds-banner--info{background:var(--t-s2);border:1px solid var(--t-infB);}
.ds-banner--floating.ds-banner--offline{background:var(--t-s2);border:1px solid var(--t-ofB);}
.ds-banner--floating.ds-banner--permission{background:var(--t-s2);border:1px solid var(--t-perB);}
.ds-banner__title{font-family:var(--t-fB);font-size:var(--t-fsBody);font-weight:600;margin:0 0 2px 0;}
.ds-banner__text{font-family:var(--t-fB);font-size:var(--t-fsBody);opacity:0.85;line-height:1.5;margin:0;}
.ds-banner__dismiss{background:none;border:none;cursor:pointer;padding:0;opacity:0.6;}
.ds-btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--t-gapSm);border-radius:var(--t-r);font-family:var(--t-fB);font-size:var(--t-fsBase);font-weight:600;transition:all 0.18s ease;cursor:pointer;border:none;}
.ds-btn--full{width:100%;}
.ds-btn--sm{font-size:var(--t-fsBody);padding:9px var(--t-rowH);}
.ds-btn:not(.ds-btn--sm){padding:var(--t-rowV) 20px;}
.ds-btn--primary{background:var(--t-pri);color:var(--t-white);box-shadow:0 4px 18px rgba(61,127,255,0.28);}
.ds-btn--secondary{background:var(--t-s3);color:var(--t-t1);border:1px solid var(--t-bd);box-shadow:none;}
.ds-btn--ghost{background:transparent;color:var(--t-t2);border:1px solid var(--t-bd);box-shadow:none;}
.ds-btn--danger{background:var(--t-erD);color:var(--t-er);border:1px solid rgba(239,91,91,0.3);box-shadow:none;}
.ds-btn--link{background:transparent;color:var(--t-priT);padding:0;box-shadow:none;}
.ds-btn:disabled{opacity:0.45;cursor:not-allowed;}
.ds-icon-btn{width:36px;height:36px;border-radius:var(--t-rPill);background:var(--t-s3);border:1px solid var(--t-bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;}
.ds-icon-btn--40{width:40px;height:40px;}
.ds-icon-btn--ghost-bg{background:transparent;border-color:transparent;}
.ds-icon-btn--pri-bg{background:var(--t-priD);}
.ds-icon-btn--er-bg{background:var(--t-erD);}
.ds-cov-badge{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:999px;font-family:var(--t-fB);font-size:11px;font-weight:600;letter-spacing:0.03em;text-transform:uppercase;}
.ds-cov-badge__dot{width:6px;height:6px;border-radius:999px;flex-shrink:0;}
.ds-cov-badge--high{background:var(--t-HD);color:var(--t-H);}
.ds-cov-badge--high .ds-cov-badge__dot{background:var(--t-H);}
.ds-cov-badge--medium{background:var(--t-MD);color:var(--t-M);}
.ds-cov-badge--medium .ds-cov-badge__dot{background:var(--t-M);}
.ds-cov-badge--low{background:var(--t-LD);color:var(--t-L);}
.ds-cov-badge--low .ds-cov-badge__dot{background:var(--t-L);}
.ds-cov-badge--none{background:var(--t-nmD);color:var(--t-nm);}
.ds-cov-badge--none .ds-cov-badge__dot{width:6px;height:6px;border-radius:1px;background:var(--t-nm);flex-shrink:0;}
.ds-panel{position:fixed;top:16px;z-index:999;background:var(--t-s);border:1px solid var(--t-bd);max-height:90vh;overflow-y:auto;}
.ds-panel--left{left:16px;border-radius:var(--t-r);padding:10px 14px;max-width:168px;}
.ds-panel--right{right:16px;border-radius:var(--t-rLg);padding:var(--t-cardPad) var(--t-rowH);width:210px;}
.ds-panel__title{font-family:var(--t-fD);font-size:11px;font-weight:700;color:var(--t-t1);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px;}
.ds-panel--right .ds-panel__title{margin-bottom:12px;}
.ds-section{margin-bottom:10px;}
.ds-section__label{font-family:var(--t-fB);font-size:9px;font-weight:700;color:var(--t-t2);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:3px;}
.ds-section__list{display:flex;flex-direction:column;gap:6px;margin-bottom:14px;}
.ds-section__list--wrap{flex-wrap:wrap;flex-direction:row;gap:5px;}
.ds-nav-btn{display:block;width:100%;text-align:left;padding:2px 0;font-family:var(--t-fB);font-size:11px;color:var(--t-t1);font-weight:400;background:none;border:none;cursor:pointer;}
.ds-nav-btn--active{color:var(--t-priT);font-weight:600;}
.ds-kit-label{font-family:var(--t-fB);font-size:10px;color:var(--t-t3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;}
.ds-smart-banner{border-radius:var(--t-r);margin-bottom:var(--t-rowVSm);}
.ds-smart-banner--floating{margin-bottom:0;border-radius:var(--t-rLg);overflow:hidden;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}
.ds-smart-banner--floating .ds-smart-banner__track{display:none;}
.ds-smart-banner--floating.ds-banner--warning{background:rgba(22,25,35,0.5);border:1px solid rgba(240,160,32,0.45);}
.ds-smart-banner--floating.ds-banner--error{background:rgba(22,25,35,0.5);border:1px solid rgba(239,91,91,0.45);}
.ds-smart-banner--floating.ds-banner--success{background:rgba(22,25,35,0.5);border:1px solid rgba(45,212,160,0.45);}
.ds-smart-banner--floating.ds-banner--info{background:rgba(22,25,35,0.5);border:1px solid rgba(91,164,245,0.45);}
.ds-smart-banner--floating.ds-banner--offline{background:rgba(22,25,35,0.5);border:1px solid rgba(86,104,122,0.45);}
.ds-smart-banner--floating.ds-banner--permission{background:rgba(22,25,35,0.5);border:1px solid rgba(160,122,245,0.45);}
.ds-smart-banner__track{height:2px;background:rgba(0,0,0,0.18);}
.ds-smart-banner__progress{height:100%;width:calc(var(--progress-pct,0)*1%);opacity:0.55;transition:width 50ms linear;}
.ds-banner--success .ds-smart-banner__progress{background:var(--t-su_);}
.ds-banner--error .ds-smart-banner__progress{background:var(--t-er);}
.ds-banner--warning .ds-smart-banner__progress{background:var(--t-wa);}
.ds-banner--info .ds-smart-banner__progress{background:var(--t-inf);}
.ds-banner--offline .ds-smart-banner__progress{background:var(--t-of_);}
.ds-banner--permission .ds-smart-banner__progress{background:var(--t-per);}
.ds-dismiss-btn{padding:2px;line-height:0;}
.ds-token-swatch{display:flex;flex-direction:column;align-items:center;gap:3px;}
.ds-token-swatch__box{width:26px;height:26px;border-radius:6px;border:1px solid rgba(255,255,255,0.1);}
.ds-token-swatch__label{font-family:var(--t-fB);font-size:8px;color:var(--t-t3);}
.ds-token-swatch--pri .ds-token-swatch__box{background:var(--t-pri);}
.ds-token-swatch--H .ds-token-swatch__box{background:var(--t-H);}
.ds-token-swatch--M .ds-token-swatch__box{background:var(--t-M);}
.ds-token-swatch--L .ds-token-swatch__box{background:var(--t-L);}
.ds-token-swatch--per .ds-token-swatch__box{background:var(--t-per);}
.ds-token-swatch--inf .ds-token-swatch__box{background:var(--t-inf);}
.ds-token-swatch--nm .ds-token-swatch__box{background:var(--t-nm);}
.ds-section__list--wrap{flex-direction:row;flex-wrap:wrap;gap:5px;}
.ds-typo-showcase{display:flex;flex-direction:column;gap:4px;}
.ds-typo-h1{font-family:var(--t-fD);font-size:20px;font-weight:800;color:var(--t-t1);letter-spacing:-0.02em;margin:0;}
.ds-typo-h2{font-family:var(--t-fD);font-size:16px;font-weight:700;color:var(--t-t1);margin:0;}
.ds-typo-h3{font-family:var(--t-fD);font-size:13px;font-weight:600;color:var(--t-t1);margin:0;}
.ds-typo-body{font-family:var(--t-fB);font-size:15px;color:var(--t-t1);margin:0;}
.ds-typo-body-sm{font-family:var(--t-fB);font-size:13px;color:var(--t-t2);margin:0;}
.ds-typo-caption{font-family:var(--t-fB);font-size:11px;color:var(--t-t3);text-transform:uppercase;letter-spacing:0.08em;margin:0;}
.ds-typo-mono{font-family:var(--t-fM);font-size:14px;color:var(--t-t1);font-weight:700;margin:0;}
`;
