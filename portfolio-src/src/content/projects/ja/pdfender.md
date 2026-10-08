---
title: "PDFender"
summary: "PDFに埋め込まれた見えにくい文字や隠し指示を検査するWebアプリ。PDFの描画情報を解析し、生成AIに資料を渡す前の確認を支援する。"
tags: ["web", "pdf", "security", "tools"]
period: "2026年"
stack: ["React", "TypeScript", "PDF.js", "PWA"]
hero: "/img/pdfender.jpg"
demoUrl: "https://minoru-s.github.io/pdf-injection-detector/"
repoUrl: "https://github.com/minoru-s/pdf-injection-detector"
order: 6
highlights:
  - "PDFの見え方と抽出される文字の差を検査"
  - "PDF本文・抽出文字・検出結果は外部へ送信しない"
---

<p class="mb-4">生成AIに読み込ませるPDFには、人には見えにくい形でAI向けの指示が埋め込まれることがあります。PDFenderは、そのような間接プロンプトインジェクションを人が確認するための手掛かりを提示するWebアプリです。</p>

<p class="mb-4">PDF内部の文字情報と描画命令を調べ、テキストとして抽出される内容と、人間が見るページの表示との差を検査します。OCRで画像を読み取るのではなく、文字の色・大きさ・透明度・配置や描画順序から、見えにくい文字を探します。</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">主な機能</h4>
<ul class="space-y-3 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10">
  <li>背景と同色の文字、極端に小さい文字、透明な文字、図形や画像に覆われた文字などを検出。</li>
  <li>不可視のUnicode文字や、PDFの文書情報に含まれる指示表現も確認候補として表示。</li>
  <li>疑義箇所への移動、判定根拠、スコアの表示により、元のPDFとの照合を支援。</li>
  <li>読み込みから解析までブラウザ内で完結し、PDF本文・抽出文字・検出結果を外部へ送信しない。</li>
</ul>

<p class="mt-5 text-sm text-appleDark/70">検出結果は確認の手掛かりであり、安全性や攻撃の有無を保証するものではありません。誤検知・見逃しがあり、画像化された文字などは検査対象外です。</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">検出方式のガイド</h4>
<p class="mb-4">各検出方式の考え方と制約を、ガイドにまとめています。</p>
<ul class="space-y-2 text-sm">
  <li><a href="https://minoru-s.github.io/pdf-injection-detector/guide/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline">PDFender：検出方式と制約のガイド（日本語）</a></li>
  <li><a href="https://minoru-s.github.io/pdf-injection-detector/guide/en/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline">PDFender detection guide（English）</a></li>
</ul>
