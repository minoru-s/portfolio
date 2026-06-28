const b = import.meta.env.BASE_URL;

export const profile = {
  name: "Minoru SAITO",
  englishName: "Minoru SAITO",
  greeting: "Hello, I'm",
  title: "1st Year Master's Student at Institute of Science Tokyo",
  description: "I have enjoyed creating things by touching a wide range of technologies following my curiosity. I aim to actively jump into unknown areas and create new value.",
  image: "/img/me.jpg",
  email: "saito.minoru.info@gmail.com",
};

export const aboutText = `I've worked on making things across a wide range of means — software, hardware, 3D CAD, experimental analysis, and video production. In my undergraduate research, I was involved in developing small swarm robots for lunar exploration, gaining end-to-end experience from CAD design, 3D-printed prototyping, and actual-machine experiments to motion-capture analysis and building data-visualization tools. I find it rewarding when the things I build move experiments and people's activities forward.`;

export const aboutText2 = `Guided by my motto, "When in doubt, choose the braver path," I take on unknown territory wherever my curiosity leads.`;

export const aboutInfo = [
  { icon: "fa-solid fa-location-dot", text: "From Mie Prefecture" },
  { icon: "fa-solid fa-language", text: "TOEIC L&R 835 (Acquired Mar 2025)" },
  { icon: "fa-solid fa-graduation-cap", text: "Enrolled at Institute of Science Tokyo" },
  { icon: "fa-solid fa-laptop-code", text: "Software / Hardware / Video / Design" },
];

export const skills = [
  {
    category: "Programming",
    icon: "fa-solid fa-code",
    items: [
      { name: "HTML / CSS", level: 3, note: "Built multiple sites including this portfolio & web media" },
      { name: "LaTeX", level: 3, note: "Used for thesis and academic report writing" },
      { name: "Python", level: 2, note: "pandas, NumPy, matplotlib" },
      { name: "C", level: 2, note: "Learned in class; also taught as a programming tutor" },
      { name: "C#", level: 2, note: "Taught as a programming tutor" },
      { name: "R", level: 2, note: "Used for statistical analysis in coursework" },
      { name: "Git / GitHub", level: 2, note: "Used for version control in personal & research projects" },
      { name: "MATLAB", level: 1, note: "Basic knowledge from coursework" },
      { name: "Ruby", level: 1, note: "Ruby on Rails" },
      { name: "Verilog-HDL", level: 1, note: "Basic knowledge from coursework" },
    ],
  },
  {
    category: "Hardware & Lab",
    icon: "fa-solid fa-microchip",
    items: [
      { name: "Arduino", level: 3, note: "Used for research robot control" },
      { name: "RAISE3D", level: 3, note: "Pro3 / Pro3 HS" },
      { name: "Markforged", level: 3, note: "FX10 / X7 / MarkTwo" },
      { name: "Raspberry Pi", level: 2, note: "Used for research robot control" },
      { name: "OptiTrack", level: 2, note: "Motion Capture" },
      { name: "3D Printer Maintenance", level: 2, note: "Managed maintenance of RAISE3D & Markforged" },
      { name: "TAKMill", level: 1, note: "Compact CNC milling machine" },
    ],
  },
  {
    category: "Creative",
    icon: "fa-solid fa-palette",
    items: [
      { name: "Final Cut Pro X", level: 3, note: "Video Editing (10 years)" },
      { name: "Adobe Illustrator", level: 2, note: "Created pamphlets, posters, and print materials" },
      { name: "Adobe Encore", level: 1, note: "DVD authoring" },
      { name: "Autodesk Fusion", level: 2, note: "Used for 3D CAD design of robot chassis" },
      { name: "Unity", level: 2, note: "Used for game development & simulation environments" },
    ],
  },
  {
    category: "AI & Dev Tools",
    icon: "fa-solid fa-wand-magic-sparkles",
    items: [
      { name: "Claude Code", level: 3, note: "AI coding agent; primary development tool" },
      { name: "macOS", level: 3, note: "Primary environment" },
      { name: "GitHub Copilot", level: 2, note: "Used alongside Claude Code based on credit balance" },
      { name: "Antigravity", level: 2, note: "Used alongside Claude Code based on credit balance" },
      { name: "Windows", level: 2, note: "Occasional use" },
      { name: "Continue", level: 1, note: "Editor extension for use with Local LLM" },
      { name: "Linux", level: 1, note: "Rare use" },
      { name: "Local LLM", level: 1, note: "e.g. LM Studio" },
      { name: "Exploratory", level: 1, note: "Data analysis" },
    ],
  },
];

export const achievements = [
  {
    title: "Research Content Featured on BS NTV 'Galileo X'",
    date: "May 2026",
    summary: "The research on lunar exploration robots was featured on BS NTV 'Galileo X'. My appearance during the experiment is also included in the program.",
    details: `<p class="mb-4">The research on small swarm robots aiming to explore lava tubes on the moon, which I was involved in last year, was featured on BS NTV "Galileo X".</p>
<p class="mb-4">Although I didn't provide direct data this time, my appearance during the experiment is also captured in the program.</p>
<div class="mt-6 mb-2">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Program Video (YouTube)</h4>
  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;border:1px solid rgba(0,0,0,0.1);box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" src="https://www.youtube.com/embed/15Ob3HZnR8k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
<div class="p-4 mt-6 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Program Page</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.web-wac.co.jp/program/galileo_x/%e5%b0%8f%e5%9e%8b%e7%be%a4%e3%83%ad%e3%83%9c%e3%83%83%e3%83%88%e3%80%81%e6%9c%88%e3%81%b8-%e9%80%86%e8%bb%a2%e3%81%ae%e7%99%ba%e6%83%b3%e3%81%a7%e6%8e%a2%e6%9f%bb%e3%81%a8%e6%8b%a0%e7%82%b9%e6%a7%8b" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Small Swarm Robots to the Moon: Aiming for Exploration and Base Construction with Reverse Thinking</a></li>
  </ul>
</div>`,
  },
  {
    title: "Research Content Featured on NHK BS Program",
    date: "Jan 2026",
    summary: "Received an interview about the research of the lunar exploration robot co-developed with JAXA, and broadcasted on the program.",
    details: `<p class="mb-4">Our project was interviewed by NHK BS about the research on small swarm robots aiming to explore lava tubes on the moon. In the program, along with the introduction of the research contents, the data I analyzed was also broadcasted.</p>
<p class="mb-4">This project is being advanced jointly with JAXA and the National Institute of Advanced Industrial Science and Technology, and I am devoting myself to research every day with the goal of the robot I was involved in R&D landing on the moon in the near future.</p>
<div class="mt-6 mb-2">
  <a href="https://www.web.nhk/tv/an/frontiers/pl/series-tep-PM34JL2L14/ep/JZ37MV76G5" target="_blank" rel="noopener noreferrer" class="block group" style="text-decoration:none;color:inherit;">
    <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-black/10 hover:shadow-md transition-shadow">
      <div class="sm:w-1/3 bg-gray-100 flex items-center justify-center shrink-0 h-32 sm:h-auto">
        <img src="https://imgu.web.nhk/static/assets/images/tvepisode/te/JZ37MV76G5/JZ37MV76G5-eyecatch_4c37bbd521090ab62701047e74977cef.jpg" alt="Program Thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style="border-radius:0;">
      </div>
      <div class="p-4 sm:p-5 flex flex-col justify-center flex-grow">
        <div class="text-[11px] font-bold text-appleGray mb-1">NHK BS Premium 4K</div>
        <div class="font-bold text-appleDark text-sm sm:text-base leading-tight mb-2 group-hover:text-appleBlue transition-colors">Forefront of Lunar Robots from Japan</div>
        <div class="text-xs text-appleDark/70 mt-auto flex items-center pt-2"><i class="fa-regular fa-calendar mr-1.5"></i>Initial Broadcast: Jan 26, 2026, 10:00 PM</div>
      </div>
    </div>
  </a>
</div>`,
  },
  {
    title: "Participation in Australia-Japan Joint Demonstration Experiment",
    date: "Nov 2025",
    summary: "Participated in a demonstration experiment in a cave in Australia, published on official websites of each research institution.",
    details: `<p class="mb-4">As part of the research project, I participated in a cave experiment in Australia. The appearance of this experiment was introduced on the websites of multiple research institutions including CSIRO and JAXA.</p>
<p class="mb-4">The data I conducted heatmap analysis from fixed-point video was posted as a screenshot in the JAXA article, and I was introduced with my real name in the CSIRO article.</p>
<div class="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
  <div>
    <img src="https://www.isas.jaxa.jp/topics/files/20260319_3.png" alt="Analysis Data" class="w-full rounded-lg border border-black/10 object-cover aspect-video">
    <p class="text-xs text-appleGray mt-2 text-center">Heatmap analysis I performed from fixed-point video</p>
  </div>
  <div>
    <img src="https://research.csiro.au/robotics/wp-content/uploads/sites/592/2026/03/japan-australia-field-trials-group-hi-1536x1025.jpg" alt="Team Photo" class="w-full rounded-lg border border-black/10 object-cover aspect-video">
    <p class="text-xs text-appleGray mt-2 text-center">Australia-Japan Joint Research Team<br>&copy; CSIRO, Katrina Lo Surdo</p>
  </div>
</div>
<div class="p-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Related Articles</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://research.csiro.au/robotics/csiro-japan-collaboration-advances-lunar-cave-robotics/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>CSIRO Official Website</a></li>
    <li><a href="https://www.isas.jaxa.jp/topics/004219.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>JAXA Official Website</a></li>
    <li><a href="https://www.chuo-u.ac.jp/research/news/2026/03/84967/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Chuo University Official Website</a></li>
    <li><a href="https://www.tuat.ac.jp/NEWS/research/20260319_01.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Tokyo University of Agriculture and Technology Official Website</a></li>
    <li><a href="https://moonshot.r.chuo-u.ac.jp/kunii/report/912/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Moonshot Research and Development Program</a></li>
  </ul>
</div>`,
  },
  {
    title: "Dean of Faculty of Science and Engineering Award",
    date: "May 2025",
    summary: "Selected as one of 3 grant-type scholarship recipients from about 1000 people based on academic and extracurricular activities.",
    details: `<p class="mb-4">In my fourth year at the Faculty of Science and Engineering, Chuo University, I was selected from about 1,000 peers for the Dean of the Faculty of Science and Engineering Award, a grant-type scholarship awarded to only 3 students, based on multifaceted evaluation of my studies and extracurricular activities.</p>`,
  },
  {
    title: "Ministry of Education Award — Volunteer Spirit Award",
    date: "Dec 2020",
    summary: "The volunteer initiative 'STARCLE', a free textbook redistribution program started with friends in high school, received the Minister of Education, Culture, Sports, Science and Technology Award at the 24th Prudential Spirit of Community Volunteer Spirit Award. (Group award)",
    details: `<p class="mb-4">The free textbook redistribution volunteer "STARCLE", which I started with three friends in my second year of high school, received the Minister of Education, Culture, Sports, Science and Technology Award at the 24th Prudential Spirit of Community Volunteer Spirit Award.</p>
<p class="mb-4">The activity of collecting unused textbooks from all over Japan and delivering them free of charge to students in need was highly evaluated. This was a <strong>group award</strong>. The prize money was used as activity funds to make shipping completely free thereafter.</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Related Links</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.gib-life.co.jp/st/about/is_pdf/20201223.pdf" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Award Recipients List (PDF) — 24th Prudential Spirit of Community</a></li>
    <li><a href="${b}en/projects/starcle/" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-right mr-2 w-4"></i>STARCLE Project Detail Page</a></li>
  </ul>
</div>`,
  },
  {
    title: "Sankoin Hotels Award — VA Activity Support Award",
    date: "2021",
    summary: "The free textbook redistribution volunteer 'STARCLE' received the VA Activity Support Award and Sankoin Hotels Award. (Group award)",
    details: `<p class="mb-4">The free textbook redistribution volunteer "STARCLE" received the VA Activity Support Award and Sankoin Hotels Award. This was a <strong>group award</strong>.</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Related Links</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://lion.or.jp/va/about/summary_2021/award_2021.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Award Recipients List — VA Activity Support Award 2021</a></li>
    <li><a href="${b}en/projects/starcle/" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-right mr-2 w-4"></i>STARCLE Project Detail Page</a></li>
  </ul>
</div>`,
  },
  {
    title: "Reader Contribution Published in Nikkei Newspaper",
    date: "May 2019",
    summary: "In my 1st year of high school, a proposal titled 'A Completely New Agricultural Corporation' submitted to the Nikkei reader initiative on food security was selected and published.",
    details: `<p class="mb-4">In my 1st year of high school, a proposal titled "A Completely New Agricultural Corporation" was selected and published in the Nikkei Newspaper reader initiative "What is needed for safe and stable food supply? (JA Zencchu Chairman edition)".</p>
<p class="mb-4">The proposal envisioned a completely new model of agricultural corporation that transcends the boundaries of existing agricultural cooperatives and corporations, addressing Japan's food security challenges and the shortage of agricultural workers.</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Published Article</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.nikkei.com/article/DGXZZO45116950S9A520C1000000/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Nikkei Newspaper (May 2019)</a></li>
  </ul>
</div>`,
  },
  {
    title: "Reader Contribution Published in Nikkei Newspaper",
    date: "Nov 2017",
    summary: "In my 2nd year of middle school, a proposal titled 'A Long Pipe Connecting Dreams' submitted to the Nikkei reader initiative on the future of delivery services was selected and published.",
    details: `<p class="mb-4">In my 2nd year of middle school, a proposal titled "A Long Pipe Connecting Dreams" was selected and published in the Nikkei Newspaper reader initiative "What functions will be required of delivery services in 2020? (Yamato Holdings President edition)".</p>
<p class="mb-4">The proposal envisioned a pipe-based parcel delivery system powered by wind and water, aiming to reduce human labor and achieve energy savings as future logistics infrastructure.</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">Published Article</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.nikkei.com/nkd/industry/article/?c=DNX&df=3&n_m_code=133&ng=DGXZZO23788610S7A121C1000000" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>Nikkei Newspaper (Nov 27, 2017)</a></li>
  </ul>
</div>`,
  },
];

export const timeline = [
  {
    year: "Apr 2016 - Mar 2022",
    title: "Kaiyo Academy",
    subtitle: "",
    description: "A boarding middle and high school located in Gamagori City, Aichi Prefecture. Joined the video club, producing many official recording videos and event movies. Also designed school festival pamphlets and student council magazines. Started learning HTML and CSS through self-study during this period.",
  },
  {
    year: "Apr 2022 - Mar 2026",
    title: "Chuo University",
    subtitle: "Dept. of Electrical, Electronic, and Communication Engineering",
    description: "Learned a wide range of fields in electrical, electronic, and information communication. Belonged to a laboratory jointly developing lunar exploration robots with JAXA, AIST, Tokyo University of Agriculture and Technology, engaging in simulations and demonstrations at JAXA exploration experimental building. Participated in overseas experiments in Australia in Nov 2025.",
  },
  {
    year: "Sep 2022 - Feb 2026",
    title: "Major Programming School",
    subtitle: "Part-time Instructor",
    description: "For three and a half years, I taught programming to students from elementary to high school, both in person and online. I covered Unity+C#, Python, and Scratch, adapting my explanations and assignments to each learner's level. To help beginners complete their own creations, I supported them through debugging and design thinking as well.",
  },
  {
    year: "2022 - 2024 (Academic Years)",
    title: "Student Volunteer Organization",
    subtitle: "Deputy Representative & Treasurer (2024)",
    description: "Belonged to a 100-member student organization, serving as deputy representative and treasurer in 2024. Beyond managing finances, I organized previously person-dependent operating rules and codified the officer-selection process, putting the organization on a more sustainable footing. In the latter half of the term, I effectively led the organization.",
  },
  {
    year: "Apr 2026 - Mar 2028 (Expected)",
    title: "Institute of Science Tokyo",
    subtitle: "School of Engineering, Dept. of Information and Communications Engineering",
    description: "Will advance to graduate school to engage in research on haptics.",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/minoru-s", icon: "fa-brands fa-github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/minoru-s/", icon: "fa-brands fa-linkedin-in" },
  { name: "Facebook", url: "https://www.facebook.com/SAITOMlNORU", icon: "fa-brands fa-facebook" },
];

export const contactText = "Thank you for viewing my portfolio. Please contact me via email from the button below.";
