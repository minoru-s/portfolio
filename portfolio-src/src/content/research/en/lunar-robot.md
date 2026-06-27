---
title: "Research and Development of Lunar Exploration Robots"
summary: "Research and development of small swarm robots for lunar lava tube exploration. As a joint project with JAXA and AIST, experienced everything from hardware improvements and simulation building to demonstration experiments at the JAXA test facility and cave experiments in Australia."
date: 2025-04-01
tags: ["robotics", "simulation", "motion-capture", "3d-printing", "data-analysis", "space"]
period: "FY2025 - Senior Year"
organization: "Chuo University, Dept. of Electrical, Electronic, and Communication Engineering"
role: "Researcher (Hardware improvements & simulation environment)"
stack: ["Python", "CAD", "3D Printer", "OptiTrack", "Markforged"]
hero: "/img/moon1.png"
related: ["mocap-plus"]
order: 1
highlights:
  - "Joint research with JAXA & AIST (Moonshot R&D Program)"
  - "30+ jumping pad prototypes in 2 months, adopted across many lab robots"
  - "Selected as 1 of 5 from 24 for Australia cave experiment"
---

<p class="mb-4">In my senior year, I belonged to the Kunii Laboratory at Chuo University, where I conducted research and development on small swarm robots capable of jumping, aimed at exploring lunar lava tubes. This research was adopted as a Moonshot Research and Development Program, advanced jointly with JAXA, AIST, Tokyo University of Agriculture and Technology, etc.</p>

<div class="my-6">
  <img src="/portfolio/img/moon1.png" alt="Small swarm robot developed in Kunii Lab" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.src='https://images.unsplash.com/photo-1614729939124-03290b5509ce?auto=format&fit=crop&q=80&w=800'; this.onerror=null;">
  <p class="text-xs text-appleGray text-center">Small swarm robot "RED" developed in Kunii Lab</p>
</div>

<h4 class="font-bold text-appleDark mb-3 mt-8">Improvements and Experiments</h4>
<p class="mb-4">I was mainly in charge of improving the hardware of the robot and building the simulation environment.</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">Main Responsibilities</h4>
<ul class="space-y-2 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10 mb-4">
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>CAD design of the jumping pad</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Prototyping and refinement using 3D printers</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Actual-machine experiments and evaluation via motion capture</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Building the simulation environment in Python</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Developing a motion-capture data analysis tool</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Trajectory analysis and heatmap generation from fixed-camera footage</div></li>
  <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Participation in field demonstrations at the JAXA test facility and the Australian cave experiment</div></li>
</ul>

<p class="mb-4">For the hardware improvement, for example, there is the design of the robot's jumping pad. I repeated an iterative cycle of CAD design, 3D printing, actual-machine testing, and evaluation using motion capture data — more than 30 prototypes over about two months. I first tried a design with a rotation mechanism to improve turning, but it broke when sand grains jammed it, so I shifted to drawing performance out of a simpler structure rather than a complex mechanism. I ultimately arrived at a shape that balances running, jumping, and turning, and it was adopted across many robots in the laboratory. Also, for the 10-day experiment conducted at the exploration experiment building on the JAXA Sagamihara Campus, we made improvements such as increasing wheel strength and mounting high-torque motors to climb sand dunes several meters high.</p>

<div class="my-6">
  <img src="/portfolio/img/moon2.png" alt="Motion capture used for data collection in experiments" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.style.display='none'">
  <p class="text-xs text-appleGray text-center">Motion capture used for data collection in experiments</p>
</div>

<p class="mb-4">Furthermore, since the analysis of motion capture data in experiments was a challenge due to the time required, I independently developed an application that performs optimal data trimming and automatic analysis just by importing exported data. For more details, please see the <a href="/portfolio/en/projects/mocap-plus/" class="font-medium text-appleBlue hover:underline transition-colors">Mocap Plus page</a>.</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">Simulation Environment Construction</h4>
<p class="mb-4">Regarding the simulation, I created a program that reproduces the algorithm implemented in the robot in a 2D environment. I ran about 3,500 trials on complex terrain simulating real environments to calculate the number of robots required to achieve the target exploration rate. I also verified inversely estimating the original terrain from the obtained exploration rate; for this inverse estimation I used gradient-boosted decision trees and achieved about 88.6% accuracy.</p>

<div class="my-6">
  <img src="/portfolio/img/moon3.png" alt="Part of simulation results" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.style.display='none'">
  <p class="text-xs text-appleGray text-center">Part of simulation results</p>
</div>

<h4 class="font-bold text-appleDark mb-3 mt-8">Cave Demonstration Experiment in Australia</h4>
<p class="mb-4">As part of the project, a demonstration experiment using actual machines was conducted in a cave in Queensland, jointly with the Australian national science agency CSIRO. I participated as one of 5 members selected from the 24 in the laboratory and acquired useful data.</p>

<div class="my-6">
  <img src="https://www.isas.jaxa.jp/topics/files/20260319_3.png" alt="Heatmap analysis data" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2">
  <p class="text-xs text-appleGray text-center">Heatmap analysis I performed from fixed-point video</p>
</div>

<p class="mb-4">In a cave environment, precise positioning systems like motion capture cannot be used. Therefore, I contributed to the visualization of experimental data by developing a program that tracks the LED light or body color of the robot from fixed-point camera footage and draws a heatmap of the movement trajectory and exploration status.</p>

<div class="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-4">
  <a href="https://moonshot.r.chuo-u.ac.jp/kunii/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-5 py-2.5 bg-appleDark text-white hover:bg-black rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>Kunii Moonshot Project
  </a>
  <a href="https://www.hmsl.elect.chuo-u.ac.jp/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-5 py-2.5 bg-appleDark text-white hover:bg-black rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>Kunii Lab, Chuo University
  </a>
</div>
