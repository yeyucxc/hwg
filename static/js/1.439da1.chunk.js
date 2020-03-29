(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{31:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var i=n(0),a=n.n(i),o=n(1),l=n(6),r=n(16),m=n(2),s=n(5);const c=o.default.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 6rem;
    margin-bottom: 3rem;
    animation-fill-mode: both;

    animation: ${m.f} 2s ease-in infinite alternate;
  }
  .title {
    display: flex;
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 0 0 4px black;
  }
`,d=Object(o.default)(l.a)`
  position: relative;
  margin: 0 0.4rem;
  padding: 0.3rem;
  border: 1px solid pink;
  color: #f4b0f3;
  animation: ${m.g} 1s ease forwards;
  animation-fill-mode: both;
  font-family: 'AiQing';
  .pinyin {
    color: #f1ad93;
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    top: -2rem;
    transform: translateX(-50%);
    .w {
      font-family: monospace;
      text-transform: capitalize;
      animation: ${m.d} 1s;
      animation-fill-mode: both;
    }
  }
`,f=[{word:"甜",pinyin:"tǔ"},{word:"言",pinyin:"wèi"},{word:"蜜",pinyin:"qíng"},{word:"语",pinyin:"huà"}];function p({handleStart:e}){return a.a.createElement(c,null,a.a.createElement("img",{className:"logo",src:s.a,alt:"logo"}),a.a.createElement("div",{className:"title"},f.map((e,t)=>a.a.createElement(d,{style:{animationDelay:`${.3*t}s`},key:e.word},e.word,a.a.createElement("em",{className:"pinyin"},a.a.createElement("i",{className:"w",style:{animationDelay:`${1.2+.3*t}s`}},e.pinyin))))),a.a.createElement(r.a,{onClick:e},"开始"))}}}]);