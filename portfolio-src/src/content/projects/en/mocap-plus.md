---
title: "Mocap Plus"
summary: "A self-built web app that cut the motion-capture analysis bottleneck in my research from about 20 minutes to about 20 seconds. Also used by many lab members."
date: 2024-06-01
tags: ["web", "motion-capture", "tools", "data-analysis"]
period: "2024"
stack: ["HTML", "CSS", "Multiple LLMs"]
hero: "/img/mocap.png"
demoUrl: "https://minoru-s.github.io/mocap/"
repoUrl: "https://github.com/minoru-s/mocap"
related: ["lunar-robot"]
order: 1
highlights:
  - "Analysis time: ~20 min → ~20 sec"
  - "Used by many lab members"
---

<p class="mb-4">In my research, analyzing motion-capture data took about 20 minutes per run. So I built a tool that handles CSV import, trimming, visualization, distance measurement, and graph generation entirely in the browser, bringing the analysis down to about 20 seconds and greatly shortening the post-experiment verification cycle.</p>

<p class="mb-4">This is a browser-based motion capture data analysis application optimized for CSV files exported from OptiTrack's analysis software Motive.</p>

<p class="mb-4">By simply uploading data, you can safely and easily perform visualization of trajectories and various data processing without sending it outside. In development, I utilized multiple LLMs such as Gemini, Claude, and ChatGPT to proceed with implementation efficiently.</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">Main Features</h4>
<ul class="space-y-4 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10">
  <li class="flex items-start">
    <i class="fa-solid fa-chart-line text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">Wide Area Analysis Tool</strong>Supports visualization of trajectory, heat map, and coverage. Flexible display settings such as Z-axis inversion and detailed downsampling are possible.</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-filter text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">Data Analysis and Processing Tool</strong>Provides application of user-defined low-pass and Gaussian filters, automatic detection of active intervals, scattered display of data, and scaling of graphs.</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-scissors text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">Data Trimming and Distance Measurement</strong>Equipped with a function to extract any interval and output it as a Motive-compatible CSV, and a function to measure the Euclidean distance between any two specified points.</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-gauge-high text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">Reference Speed Calculation Tool</strong>Tracking and speed calculation corresponding to exported data in quaternion format can be performed.</div>
  </li>
</ul>
