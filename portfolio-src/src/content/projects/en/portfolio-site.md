---
title: "Personal Portfolio Site"
summary: "Portfolio site created for job hunting. Adopted a design like Liquid Glass to build a modern UI."
date: 2025-01-01
tags: ["web"]
stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Astro"]
hero: "/img/pf.png"
demoUrl: "https://minoru-s.github.io/portfolio/"
repoUrl: "https://github.com/minoru-s"
order: 5
highlights:
  - "Two-tier information architecture (modal-as-gate → detail page)"
  - "Referrer-aware contextual navigation"
  - "Liquid Glass design, bilingual (JA/EN), scroll animations"
---

<p class="mb-4">I created a portfolio site to showcase my skills and experiences for job hunting.</p>

<h2 class="text-xl font-bold text-appleDark mt-8 mb-4">UX Considerations</h2>

<p class="mb-4"><strong>Two-tier information architecture (modal-as-gate)</strong>: Clicking a card on the home page opens a summary modal. Only visitors who want to dive deeper proceed to the full detail page. This design serves both casual browsers and engaged readers without overwhelming either group.</p>

<p class="mb-4"><strong>Context-aware navigation</strong>: The navigation buttons at the bottom of detail pages change based on where the user came from. Visitors arriving from a home-page modal are taken back to the exact section anchor ("Back"), while those coming from a list page see the list as the primary destination.</p>

<p class="mb-4"><strong>Smooth modal experience</strong>: When a modal opens, the scrollbar disappearing can cause the entire layout to shift sideways. I prevent this by dynamically measuring the scrollbar width and compensating with padding — keeping the page stable during modal transitions.</p>

<p class="mb-4"><strong>Liquid Glass design</strong>: Semi-transparent glass panels with animated blob backgrounds visible through them create an Apple-inspired modern aesthetic. The site also supports language switching (JA/EN), scroll animations, and responsive layouts across all screen sizes.</p>
