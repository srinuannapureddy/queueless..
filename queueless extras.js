/* QueueLess add-on
   1) Makes unreadable controls (language box, the box beside it, etc.) visible.
   2) Adds a read-aloud voice assistant (bottom-left button).
   It does not edit any existing code. Add ONE line before </body> in index.html:
   <script src="queueless-extras.js"></script>
*/
(function () {
  'use strict';
  if (window.__qlExtras) return;
  window.__qlExtras = true;

  var DARK = '#14213d', LIGHT = '#ffffff', TEAL = '#0a5c5c', ORANGE = '#f28c1e';

  /* ---------- Styles ---------- */
  var css = [
    'select option{color:' + DARK + ';background:#fff}',
    '#ql-assist{font-family:"Noto Sans","Segoe UI",system-ui,Arial,sans-serif;font-size:17px;line-height:1.4}',
    '#ql-fab{position:fixed;left:16px;bottom:16px;z-index:2147483000;width:64px;height:64px;border-radius:50%;',
    'border:3px solid #fff;background:' + TEAL + ';color:#fff;font-size:28px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3)}',
    '#ql-fab:hover{background:#0d7272}',
    '#ql-panel{position:fixed;left:16px;bottom:92px;z-index:2147483000;width:min(92vw,350px);max-height:80vh;overflow:auto;',
    'background:#fff;color:' + DARK + ';border:3px solid ' + TEAL + ';border-radius:16px;padding:16px;box-shadow:0 8px 28px rgba(0,0,0,.3)}',
    '#ql-panel[hidden]{display:none}',
    '#ql-panel h2{margin:0 0 4px;font-size:21px}',
    '#ql-panel p{margin:0 0 12px;color:#44526b;font-size:15px}',
    '#ql-panel .ql-row{display:flex;gap:8px;margin-bottom:10px}',
    '#ql-panel button.ql-b{flex:1;min-height:52px;border-radius:10px;border:2px solid ' + TEAL + ';background:#fff;color:' + TEAL + ';',
    'font:inherit;font-weight:700;cursor:pointer}',
    '#ql-panel button.ql-main{width:100%;background:' + TEAL + ';color:#fff;margin-bottom:10px}',
    '#ql-panel button.ql-b:hover{filter:brightness(.95)}',
    '#ql-panel label{display:block;font-weight:700;margin:10px 0 4px;font-size:15px}',
    '#ql-panel select{width:100%;min-height:46px;font:inherit;border:2px solid ' + DARK + ';border-radius:8px;background:#fff;color:' + DARK + ';padding:4px 8px}',
    '#ql-panel input[type=range]{width:100%}',
    '#ql-panel .ql-check{display:flex;align-items:center;gap:10px;font-weight:700;margin:6px 0}',
    '#ql-panel .ql-check input{width:24px;height:24px}',
    '#ql-note{margin-top:8px;font-size:14px;color:#8a3b00}',
    '#ql-assist button:focus-visible,#ql-assist select:focus-visible,#ql-assist input:focus-visible{outline:3px solid ' + ORANGE + ';outline-offset:2px}',
    '.ql-speaking{outline:3px dashed ' + ORANGE + '!important;outline-offset:3px}'
  ].join('');
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  /* ---------- 1. Fix low-contrast controls ---------- */
  function parse(c) {
    var m = c && c.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',').map(parseFloat);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  function lum(c) {
    function f(v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function ratio(a, b) {
    var l1 = lum(a), l2 = lum(b), t;
    if (l1 < l2) { t = l1; l1 = l2; l2 = t; }
    return (l1 + 0.05) / (l2 + 0.05);
  }
  function bgOf(el) {
    while (el && el.nodeType === 1) {
      var c = parse(getComputedStyle(el).backgroundColor);
      if (c && c.a > 0.5) return c;
      el = el.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function fixControls() {
    var list = document.querySelectorAll('select, button, input, textarea, [role=button]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.closest('#ql-assist')) continue;
      var cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      var fg = parse(cs.color), bg = bgOf(el);
      if (!fg) continue;
      var faded = parseFloat(cs.opacity) < 0.8;
      if (faded || ratio(fg, bg) < 3) {
        var light = lum(bg) > 0.4, col = light ? DARK : LIGHT;
        el.style.setProperty('color', col, 'important');
        el.style.setProperty('opacity', '1', 'important');
        if (light) el.style.setProperty('border', '2px solid ' + DARK, 'important');
        var kids = el.querySelectorAll('*');
        for (var k = 0; k < kids.length; k++) {
          kids[k].style.setProperty('color', col, 'important');
          kids[k].style.setProperty('opacity', '1', 'important');
        }
      }
    }
  }
  var fixTimer;
  function scheduleFix() { clearTimeout(fixTimer); fixTimer = setTimeout(fixControls, 250); }

  /* ---------- 2. Read-aloud voice assistant ---------- */
  var synth = window.speechSynthesis;
  var voices = [], chunks = [], idx = 0, token = 0, paused = false, tapOn = false, rate = 0.9;

  function loadVoices() { voices = synth ? synth.getVoices() : []; }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  var LANGS = [
    ['auto', 'Same as website language'], ['en-IN', 'English'], ['hi-IN', 'हिन्दी (Hindi)'],
    ['te-IN', 'తెలుగు (Telugu)'], ['kn-IN', 'ಕನ್ನಡ (Kannada)'], ['ta-IN', 'தமிழ் (Tamil)'],
    ['mr-IN', 'मराठी (Marathi)'], ['gu-IN', 'ગુજરાતી (Gujarati)'], ['bn-IN', 'বাংলা (Bengali)']
  ];
  var DETECT = [
    ['hi-IN', /हिन्दी|हिंदी|hindi/i], ['te-IN', /తెలుగు|telugu/i], ['kn-IN', /ಕನ್ನಡ|kannada/i],
    ['ta-IN', /தமிழ்|tamil/i], ['mr-IN', /मराठी|marathi/i], ['gu-IN', /ગુજરાતી|gujarati/i],
    ['bn-IN', /বাংলা|bengali/i], ['en-IN', /english/i]
  ];

  function siteLang() {
    var sels = document.querySelectorAll('select');
    for (var i = 0; i < sels.length; i++) {
      var s = sels[i], hasEnglish = false;
      for (var j = 0; j < s.options.length; j++) if (/english/i.test(s.options[j].text)) hasEnglish = true;
      if (!hasEnglish) continue;
      var o = s.options[s.selectedIndex];
      var t = (o ? o.text : '') + ' ' + s.value;
      for (var d = 0; d < DETECT.length; d++) if (DETECT[d][1].test(t)) return DETECT[d][0];
    }
    var h = (document.documentElement.lang || '').toLowerCase().slice(0, 2);
    for (var l = 0; l < LANGS.length; l++) if (LANGS[l][0].slice(0, 2) === h) return LANGS[l][0];
    return 'en-IN';
  }
  function currentLang() {
    var v = document.getElementById('ql-lang').value;
    return v === 'auto' ? siteLang() : v;
  }
  function pickVoice(code) {
    var base = code.slice(0, 2).toLowerCase(), i;
    for (i = 0; i < voices.length; i++) if (voices[i].lang.toLowerCase().replace('_', '-') === code.toLowerCase()) return voices[i];
    for (i = 0; i < voices.length; i++) if (voices[i].lang.toLowerCase().indexOf(base) === 0) return voices[i];
    return null;
  }

  function split(text) {
    text = text.replace(/\s+/g, ' ').trim();
    var parts = text.match(/[^.!?।]+[.!?।]?/g) || [text], out = [], cur = '';
    parts.forEach(function (p) {
      if ((cur + p).length > 170) { if (cur) out.push(cur); cur = p; } else { cur += p; }
    });
    if (cur) out.push(cur);
    var final = [];
    out.forEach(function (c) {
      while (c.length > 220) {
        var cut = c.lastIndexOf(' ', 200); if (cut < 50) cut = 200;
        final.push(c.slice(0, cut)); c = c.slice(cut);
      }
      final.push(c);
    });
    return final;
  }

  function note(msg) { document.getElementById('ql-note').textContent = msg || ''; }

  function stop() {
    token++; chunks = []; idx = 0; paused = false;
    if (synth) synth.cancel();
    setPauseLabel();
  }
  function setPauseLabel() {
    var b = document.getElementById('ql-pause');
    if (b) b.textContent = paused ? '▶ Continue' : '⏸ Pause';
  }
  function speak(text) {
    if (!synth) { note('This browser cannot read aloud. Please use Chrome or Edge.'); return; }
    stop();
    chunks = split(text);
    if (!chunks.length) { note('Nothing to read here.'); return; }
    var code = currentLang(), my = token, voice = pickVoice(code);
    note(voice ? '' : 'No voice installed for this language on your device. Reading with the closest voice.');
    (function next() {
      if (my !== token || idx >= chunks.length) return;
      var u = new SpeechSynthesisUtterance(chunks[idx++]);
      u.lang = code; if (voice) u.voice = voice; u.rate = rate;
      u.onend = next; u.onerror = function () { if (my === token) next(); };
      synth.speak(u);
    })();
  }

  function pageText() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), out = [], n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.closest('#ql-assist,select,script,style,noscript')) continue;
      var t = n.nodeValue.replace(/\s+/g, ' ').trim();
      if (!t || !p.getClientRects().length) continue;
      var cs = getComputedStyle(p);
      if (cs.visibility === 'hidden') continue;
      out.push(t);
    }
    return out.join('. ');
  }

  /* ---------- Build the panel ---------- */
  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'ql-assist';
    var opts = LANGS.map(function (l) { return '<option value="' + l[0] + '">' + l[1] + '</option>'; }).join('');
    wrap.innerHTML =
      '<button id="ql-fab" type="button" aria-label="Open voice assistant" aria-expanded="false" title="Voice assistant">🔊</button>' +
      '<div id="ql-panel" role="dialog" aria-label="Voice assistant" hidden>' +
      '<h2>Voice assistant</h2><p>I can read this page aloud for you.</p>' +
      '<button class="ql-b ql-main" id="ql-read" type="button">🔊 Read this page</button>' +
      '<div class="ql-row"><button class="ql-b" id="ql-pause" type="button">⏸ Pause</button>' +
      '<button class="ql-b" id="ql-stop" type="button">⏹ Stop</button></div>' +
      '<label class="ql-check"><input type="checkbox" id="ql-tap"> Tap any text to hear it</label>' +
      '<label for="ql-lang">Voice language</label><select id="ql-lang">' + opts + '</select>' +
      '<label for="ql-rate">Speed</label><input type="range" id="ql-rate" min="0.6" max="1.4" step="0.1" value="0.9">' +
      '<div id="ql-note" role="status"></div></div>';
    document.body.appendChild(wrap);

    var fab = document.getElementById('ql-fab'), panel = document.getElementById('ql-panel');
    function toggle(open) {
      panel.hidden = !open;
      fab.setAttribute('aria-expanded', String(open));
      fab.textContent = open ? '✖' : '🔊';
    }
    fab.addEventListener('click', function () { toggle(panel.hidden); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { toggle(false); fab.focus(); } });

    document.getElementById('ql-read').addEventListener('click', function () { speak(pageText()); });
    document.getElementById('ql-stop').addEventListener('click', function () { stop(); note(''); });
    document.getElementById('ql-pause').addEventListener('click', function () {
      if (!synth || !synth.speaking) return;
      if (paused) { synth.resume(); paused = false; } else { synth.pause(); paused = true; }
      setPauseLabel();
    });
    document.getElementById('ql-rate').addEventListener('input', function () { rate = parseFloat(this.value); });
    document.getElementById('ql-tap').addEventListener('change', function () {
      tapOn = this.checked;
      note(tapOn ? 'Tap on any heading, button or text to hear it.' : '');
    });
    document.getElementById('ql-lang').addEventListener('change', function () { note(''); });

    /* Tap-to-hear: listens only, never blocks the site's own clicks */
    document.addEventListener('click', function (e) {
      if (!tapOn || e.target.closest('#ql-assist')) return;
      var el = e.target.closest('button,a,h1,h2,h3,h4,h5,h6,p,li,label,td,th,[role=button]') || e.target;
      var t = (el.getAttribute('aria-label') || el.innerText || el.alt || el.title || '').trim();
      if (!t || t.length > 300) return;
      speak(t);
    }, true);

    window.addEventListener('beforeunload', stop);
    if (!synth) note('This browser cannot read aloud. Please use Chrome or Edge.');
  }

  function init() {
    build();
    fixControls();
    setTimeout(fixControls, 800);
    setTimeout(fixControls, 2500);
    if (window.MutationObserver) new MutationObserver(function (m) {
      for (var i = 0; i < m.length; i++) if (!m[i].target.closest || !m[i].target.closest('#ql-assist')) { scheduleFix(); return; }
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
