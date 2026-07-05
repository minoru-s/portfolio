// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function isImageParagraph(node) {
  return (
    node.type === 'paragraph' &&
    node.children?.length === 1 &&
    node.children[0].type === 'image' &&
    node.children[0].alt
  );
}

function toFigure(img) {
  return `<figure><img src="${escape(img.url)}" alt="${escape(img.alt)}" /><figcaption>${escape(img.alt)}</figcaption></figure>`;
}

function transformChildren(children) {
  if (!children?.length) return;
  const result = [];
  let i = 0;
  while (i < children.length) {
    if (isImageParagraph(children[i])) {
      const group = [];
      while (i < children.length && isImageParagraph(children[i])) {
        group.push(children[i].children[0]);
        i++;
      }
      if (group.length === 1) {
        result.push({ type: 'html', value: toFigure(group[0]) });
      } else {
        const figures = group.map(img => `  ${toFigure(img)}`).join('\n');
        result.push({ type: 'html', value: `<div class="img-grid">\n${figures}\n</div>` });
      }
    } else {
      if (children[i].children) transformChildren(children[i].children);
      result.push(children[i]);
      i++;
    }
  }
  children.splice(0, children.length, ...result);
}

function remarkFigureCaption() {
  return (tree) => transformChildren(tree.children);
}

export default defineConfig({
  site: 'https://minoru-s.github.io',
  base: '/portfolio/',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    remarkPlugins: [remarkFigureCaption],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
