---
title: "PDFender"
summary: "A web app that inspects PDFs for visually hidden text and AI-directed instructions. It analyzes PDF drawing operations to support review before sharing documents with generative AI."
tags: ["web", "pdf", "security", "tools"]
period: "2026"
stack: ["React", "TypeScript", "PDF.js", "PWA"]
hero: "/img/pdfender.jpg"
demoUrl: "https://minoru-s.github.io/pdf-injection-detector/"
repoUrl: "https://github.com/minoru-s/pdf-injection-detector"
order: 6
highlights:
  - "Inspects differences between visible and extracted PDF text"
  - "PDF contents, extracted text, and findings stay on the device"
---

<p class="mb-4">PDFs supplied to generative AI may contain AI-directed instructions that are difficult for a person to notice. PDFender provides human-review clues for finding this form of indirect prompt injection.</p>

<p class="mb-4">The app examines PDF text data and drawing operations to compare extracted text with the page as a person sees it. Rather than using OCR to read images, it checks text color, size, opacity, placement, and paint order for visually hidden text.</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">Main Features</h4>
<ul class="space-y-3 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10">
  <li>Detects text that blends into its background, abnormally small or transparent text, and text covered by shapes or images.</li>
  <li>Reports invisible Unicode characters and instruction-like text in PDF metadata as review candidates.</li>
  <li>Provides navigation to findings, detection signals, and scores to help compare results with the original PDF.</li>
  <li>Loads and analyzes PDFs entirely in the browser. PDF contents, extracted text, and findings are never sent to an external service.</li>
</ul>

<p class="mt-5 text-sm text-appleDark/70">Findings are review clues, not proof that a PDF is safe or contains an attack. False positives and false negatives are possible. Image-only text and some other content are outside the inspection scope.</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">Detection Guide</h4>
<p class="mb-4">The guides explain how the detection methods work and where their limits lie.</p>
<ul class="space-y-2 text-sm">
  <li><a href="https://minoru-s.github.io/pdf-injection-detector/guide/en/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline">PDFender detection methods and limitations (English)</a></li>
  <li><a href="https://minoru-s.github.io/pdf-injection-detector/guide/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline">PDFender：検出方式と制約のガイド（日本語）</a></li>
</ul>
