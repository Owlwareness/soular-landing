import fs from 'node:fs';
import path from 'node:path';
import type { ReactNode } from 'react';

/**
 * Renders Soular's legal documents from lib/legal/*.md (the same text the app bundles).
 * A small markdown subset: # / ## headings, a paragraph that is only **bold** (a subheading),
 * paragraphs, "- " bullets (nested by two spaces), "1. " numbered lists and inline **bold**.
 */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={i} href={link[2]} className="text-accent hover:text-accent-light underline">{link[1]}</a>;
    return part;
  });
}

type Item = { text: string; children: Item[] };
function list(lines: string[], ordered: boolean, key: string): ReactNode {
  const root: Item[] = [];
  const stack: { indent: number; items: Item[] }[] = [{ indent: -1, items: root }];
  for (const line of lines) {
    const match = line.match(/^(\s*)(?:-|\d+\.)\s+(.*)$/);
    if (!match) continue;
    const indent = match[1].length;
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
    const item: Item = { text: match[2], children: [] };
    stack[stack.length - 1].items.push(item);
    stack.push({ indent, items: item.children });
  }
  const render = (items: Item[], depth: number): ReactNode => {
    const Tag = ordered && depth === 0 ? 'ol' : 'ul';
    return <Tag className={`${Tag === 'ol' ? 'list-decimal' : 'list-disc'} ml-5 mt-3 space-y-2 text-muted leading-relaxed`}>
      {items.map((item, i) => <li key={i}>{inline(item.text)}{item.children.length > 0 && render(item.children, depth + 1)}</li>)}
    </Tag>;
  };
  return <div key={key}>{render(root, 0)}</div>;
}

export function LegalMarkdown({ file }: { file: 'privacy' | 'terms' | 'delete' }) {
  const source = fs.readFileSync(path.join(process.cwd(), 'lib', 'legal', `${file}.md`), 'utf8');
  const blocks = source.split(/\n\s*\n/).map(block => block.replace(/\s+$/, '')).filter(Boolean);
  return <article className="mt-8 text-foreground">
    {blocks.map((block, i) => {
      const key = String(i);
      if (block.startsWith('# ')) return <h1 key={key} className="text-3xl font-bold">{block.slice(2)}</h1>;
      if (block.startsWith('## ')) return <h2 key={key} className="mt-10 text-xl font-semibold">{block.slice(3)}</h2>;
      if (/^\*\*[^*]+\*\*$/.test(block)) return <h3 key={key} className="mt-6 font-semibold">{block.slice(2, -2)}</h3>;
      const lines = block.split('\n');
      if (lines.every(line => /^\s*(?:-|\d+\.)\s+/.test(line))) return list(lines, /^\d+\./.test(lines[0].trim()), key);
      if (/^\s*(?:-|\d+\.)\s+/.test(lines[1] || '') && !/^\s*(?:-|\d+\.)\s+/.test(lines[0])) {
        // A lead-in line followed by a list.
        return <div key={key}><p className="mt-4 text-muted leading-relaxed">{inline(lines[0])}</p>{list(lines.slice(1), /^\d+\./.test(lines[1].trim()), key + 'l')}</div>;
      }
      return <p key={key} className="mt-4 text-muted leading-relaxed">{lines.map((line, j) => <span key={j}>{j > 0 && <br />}{inline(line)}</span>)}</p>;
    })}
  </article>;
}
