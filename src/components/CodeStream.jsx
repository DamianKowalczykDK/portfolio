import { useEffect, useRef } from 'react';

function escHtml(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

function highlightPy(line) {
  const patterns = [
    ['com', /^#.*/],
    ['str', /^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|f"(?:[^"\\]|\\.)*")/],
    ['kw', /^\b(?:async|await|def|return|class|import|from|if|elif|else|for|in|with|as|None|True|False|raise|try|except|finally|yield|lambda|and|or|not|pass|self)\b/],
    ['num', /^\b\d+(?:\.\d+)?\b/],
  ];
  let out = '';
  let i = 0;
  while (i < line.length) {
    const rest = line.slice(i);
    let matched = false;
    for (const [cls, re] of patterns) {
      const m = rest.match(re);
      if (m && m.index === 0) {
        out += `<span class="tok-${cls}">${escHtml(m[0])}</span>`;
        i += m[0].length;
        matched = true;
        break;
      }
    }
    if (!matched) { out += escHtml(line[i]); i++; }
  }
  return out;
}

export default function CodeStream({ id, className, codeA, codeB }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const render = (code) => code.split('\n').map(highlightPy).join('\n');
    const blkA = render(codeA) + '\n\n\n\n';
    const blkB = render(codeB) + '\n\n\n\n';
    ref.current.innerHTML = `<div class="cols">
      <div class="code-col a"><pre class="track">${blkA}${blkA}</pre></div>
      <div class="code-col b"><pre class="track">${blkB}${blkB}</pre></div>
    </div>`;
  }, [codeA, codeB]);

  return (
    <div
      id={id}
      className={`code-stream${className ? ' ' + className : ''}`}
      aria-hidden="true"
      ref={ref}
    />
  );
}
