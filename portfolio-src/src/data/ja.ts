const b = import.meta.env.BASE_URL;

export const profile = {
  name: "西藤 実",
  englishName: "Minoru SAITO",
  greeting: "Hello, I'm",
  title: "東京科学大学大学院 修士1年",
  description: "好奇心の赴くままに幅広い技術に触れ、モノづくりを楽しんできました。未知の領域にも積極的に飛び込み、新しい価値を創造できる人を目指しています。",
  image: "/img/me.jpg",
  email: "saito.minoru.info@gmail.com",
};

export const aboutText = `ソフトウェア、ハードウェア、3D CAD、実験解析、映像制作まで、幅広い手段を用いてモノづくりに取り組んできました。学部研究では、月面探査を想定した小型群ロボットの開発に携わり、CAD設計、3Dプリンタでの試作、実機実験、モーションキャプチャ解析、データ可視化ツールの開発までを一貫して経験しました。自分の作ったものが、実験や人の活動を前に進めることにやりがいを感じています。`;

export const aboutText2 = `「迷ったら、勇気がいる方を選ぶ」を座右の銘に、好奇心の赴くまま未知の領域にも積極的に挑戦しています。`;

export const aboutInfo = [
  { icon: "fa-solid fa-location-dot", text: "三重県出身" },
  { icon: "fa-solid fa-language", text: "TOEIC L&R 835点（2025年3月取得）" },
  { icon: "fa-solid fa-graduation-cap", text: "東京科学大学大学院 在籍中" },
  { icon: "fa-solid fa-laptop-code", text: "ソフトウェア / ハードウェア / 映像 / デザイン" },
];

export const skills = [
  {
    category: "Programming",
    icon: "fa-solid fa-code",
    items: [
      { name: "HTML / CSS", level: 3, note: "ポートフォリオ・Webメディアなど複数サイトを制作" },
      { name: "LaTeX", level: 3, note: "卒業論文・授業レポートの文書作成に使用" },
      { name: "Python", level: 2, note: "pandas, NumPy, matplotlib" },
      { name: "C", level: 2, note: "授業で習得し、塾講師として指導も経験" },
      { name: "C#", level: 2, note: "塾講師として生徒への指導を担当" },
      { name: "R", level: 2, note: "授業での統計・データ解析に使用" },
      { name: "Git / GitHub", level: 2, note: "個人開発・研究でのバージョン管理に使用" },
      { name: "MATLAB", level: 1, note: "授業で基礎を習得した程度" },
      { name: "Ruby", level: 1, note: "Ruby on Rails" },
      { name: "Verilog-HDL", level: 1, note: "授業で基礎を習得した程度" },
    ],
  },
  {
    category: "Hardware & Lab",
    icon: "fa-solid fa-microchip",
    items: [
      { name: "Arduino", level: 3, note: "研究用ロボットの制御に使用" },
      { name: "RAISE3D", level: 3, note: "Pro3 / Pro3 HS" },
      { name: "Markforged", level: 3, note: "FX10 / X7 / MarkTwo" },
      { name: "Raspberry Pi", level: 2, note: "研究用ロボットの制御に使用" },
      { name: "OptiTrack", level: 2, note: "モーションキャプチャ" },
      { name: "3Dプリンタ保守", level: 2, note: "RAISE3D・Markforgedのメンテナンスを担当" },
      { name: "TAKMill", level: 1, note: "小型切削加工機" },
    ],
  },
  {
    category: "Creative",
    icon: "fa-solid fa-palette",
    items: [
      { name: "Final Cut Pro X", level: 3, note: "動画編集 歴10年" },
      { name: "Adobe Illustrator", level: 2, note: "パンフレット・ポスターなど制作経験あり" },
      { name: "Autodesk Fusion", level: 2, note: "ロボット筐体の3D CAD設計に使用" },
      { name: "Unity", level: 2, note: "ゲーム開発・シミュレーション環境の構築に使用" },
    ],
  },
  {
    category: "AI & Dev Tools",
    icon: "fa-solid fa-wand-magic-sparkles",
    items: [
      { name: "Claude Code", level: 3, note: "AIコーディングエージェント。メインの開発ツール" },
      { name: "macOS", level: 3, note: "メイン環境" },
      { name: "GitHub Copilot", level: 2, note: "クレジット残高に応じてClaude Codeと併用" },
      { name: "Antigravity", level: 2, note: "クレジット残高に応じてClaude Codeと併用" },
      { name: "Windows", level: 2, note: "時々使用" },
      { name: "Continue", level: 1, note: "Local LLM使用時のエディタ拡張" },
      { name: "Linux", level: 1, note: "たまに使用" },
      { name: "Local LLM", level: 1, note: "LM Studio等" },
      { name: "Exploratory", level: 1, note: "データ解析" },
    ],
  },
];

export const achievements = [
  {
    title: "BS日テレ「ガリレオX」にて研究内容が紹介",
    date: "2026年5月",
    summary: "月面探査ロボットの研究について、BS日テレ「ガリレオX」にて紹介されました。私の実験中の様子も本編中に写っております。",
    details: `<p class="mb-4">昨年携わっていた、月にあるとされる溶岩洞窟の探査を目標とした小型群ロボットの研究について、BS日テレ「ガリレオX」にて紹介されました。</p>
<p class="mb-4">今回直接のデータ提供は行なっていませんが、私の実験中の様子なども本編中に写っております。</p>
<div class="mt-6 mb-2">
  <h4 class="font-bold text-appleDark mb-3 text-sm">番組本編映像（YouTube）</h4>
  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;border:1px solid rgba(0,0,0,0.1);box-shadow:0 1px 4px rgba(0,0,0,0.08);">
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" src="https://www.youtube.com/embed/15Ob3HZnR8k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
<div class="p-4 mt-6 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">番組ページ</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.web-wac.co.jp/program/galileo_x/%e5%b0%8f%e5%9e%8b%e7%be%a4%e3%83%ad%e3%83%9c%e3%83%83%e3%83%88%e3%80%81%e6%9c%88%e3%81%b8-%e9%80%86%e8%bb%a2%e3%81%ae%e7%99%ba%e6%83%b3%e3%81%a7%e6%8e%a2%e6%9f%bb%e3%81%a8%e6%8b%a0%e7%82%b9%e6%a7%8b" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>小型群ロボット、月へ 逆転の発想で探査と拠点構築を目指す</a></li>
  </ul>
</div>`,
  },
  {
    title: "NHK BS番組にて研究内容が紹介",
    date: "2026年1月",
    summary: "JAXA等と共同開発中の月面探査ロボットの研究について取材を受け、番組内で放送されました。",
    details: `<p class="mb-4">現在携わっている、月にあるとされる溶岩洞窟の探査を目標とした小型群ロボットの研究について、NHK BSの取材を受けました。番組内では、研究内容の紹介とともに、私が解析を担当したデータも放送されました。</p>
<p class="mb-4">本プロジェクトはJAXAや産業技術総合研究所などと共同で進めており、近い将来、私が研究開発に携わったロボットが月に降り立つことを目指して日々研究に励んでいます。</p>
<div class="mt-6 mb-2">
  <a href="https://www.web.nhk/tv/an/frontiers/pl/series-tep-PM34JL2L14/ep/JZ37MV76G5" target="_blank" rel="noopener noreferrer" class="block group" style="text-decoration:none;color:inherit;">
    <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-black/10 hover:shadow-md transition-shadow">
      <div class="sm:w-1/3 bg-gray-100 flex items-center justify-center shrink-0 h-32 sm:h-auto">
        <img src="https://imgu.web.nhk/static/assets/images/tvepisode/te/JZ37MV76G5/JZ37MV76G5-eyecatch_4c37bbd521090ab62701047e74977cef.jpg" alt="番組サムネイル" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style="border-radius:0;">
      </div>
      <div class="p-4 sm:p-5 flex flex-col justify-center flex-grow">
        <div class="text-[11px] font-bold text-appleGray mb-1">NHK BSプレミアム4K</div>
        <div class="font-bold text-appleDark text-sm sm:text-base leading-tight mb-2 group-hover:text-appleBlue transition-colors">日本発 月面ロボット最前線</div>
        <div class="text-xs text-appleDark/70 mt-auto flex items-center pt-2"><i class="fa-regular fa-calendar mr-1.5"></i>初回放送：2026年1月26日 午後10:00</div>
      </div>
    </div>
  </a>
</div>`,
  },
  {
    title: "日豪共同 実証実験への参加",
    date: "2025年11月",
    summary: "オーストラリアの洞窟にて実証実験に参加し、各研究機関の公式Webサイトに掲載されました。",
    details: `<p class="mb-4">研究プロジェクトの一環として、オーストラリアでの洞窟実験に参加しました。この実験の様子は、オーストラリアの国立研究機関であるCSIROやJAXAをはじめ、複数の研究機関のWebサイトで紹介されています。</p>
<p class="mb-4">私が定点映像からヒートマップ解析を実施したデータがJAXAの記事にスクリーンショットとして掲載されたほか、CSIROの記事では実名入りで紹介していただきました。</p>
<div class="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
  <div>
    <img src="https://www.isas.jaxa.jp/topics/files/20260319_3.png" alt="解析データ" class="w-full rounded-lg border border-black/10 object-cover aspect-video">
    <p class="text-xs text-appleGray mt-2 text-center">私が定点映像からヒートマップ解析を実施したもの</p>
  </div>
  <div>
    <img src="https://research.csiro.au/robotics/wp-content/uploads/sites/592/2026/03/japan-australia-field-trials-group-hi-1536x1025.jpg" alt="チーム写真" class="w-full rounded-lg border border-black/10 object-cover aspect-video">
    <p class="text-xs text-appleGray mt-2 text-center">オーストラリア・日本の共同研究チーム<br>&copy; CSIRO, Katrina Lo Surdo</p>
  </div>
</div>
<div class="p-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">関連掲載記事</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://research.csiro.au/robotics/csiro-japan-collaboration-advances-lunar-cave-robotics/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>CSIRO 公式サイト</a></li>
    <li><a href="https://www.isas.jaxa.jp/topics/004219.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>JAXA 公式サイト</a></li>
    <li><a href="https://www.chuo-u.ac.jp/research/news/2026/03/84967/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>中央大学 公式サイト</a></li>
    <li><a href="https://www.tuat.ac.jp/NEWS/research/20260319_01.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>東京農工大学 公式サイト</a></li>
    <li><a href="https://moonshot.r.chuo-u.ac.jp/kunii/report/912/" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>ムーンショット型研究開発事業</a></li>
  </ul>
</div>`,
  },
  {
    title: "理工学部長賞 受賞",
    date: "2025年5月",
    summary: "学業および課外活動の評価により、約1000名の中から3名の給付型奨学金受給者に選出。",
    details: `<p class="mb-4">中央大学理工学部4年次に、同期約1000人の中から学業や課外活動などの多面的な評価を受け、3名のみが選ばれる給付型奨学金である理工学部長賞に選出されました。</p>`,
  },
  {
    title: "文部科学大臣賞 受賞（ボランティア・スピリット・アワード）",
    date: "2020年12月",
    summary: "高校在学中に仲間とはじめた教科書無償配布ボランティア「STARCLE」の活動が評価され、第24回 Prudential Spirit of Community ボランティア・スピリット・アワードにて文部科学大臣賞を受賞。※団体受賞",
    details: `<p class="mb-4">高校2年生の時に仲間3人ではじめた教科書無償配布ボランティア「STARCLE」が、第24回 Prudential Spirit of Community ボランティア・スピリット・アワードにて文部科学大臣賞を受賞しました。</p>
<p class="mb-4">未使用の教科書を全国から集め、必要としている学生に無償で届けるマッチング活動が評価されたものです。<strong>団体として受賞</strong>した賞です。受賞によって得た賞金は、その後の送料完全無料化の活動資金として活用しました。</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">関連リンク</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://www.gib-life.co.jp/st/about/is_pdf/20201223.pdf" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>受賞者一覧（PDF） — 第24回 Prudential Spirit of Community</a></li>
    <li><a href="${b}projects/starcle/" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-right mr-2 w-4"></i>STARCLE プロジェクト詳細ページ</a></li>
  </ul>
</div>`,
  },
  {
    title: "三交インホテルズ賞 受賞（VA活動支援賞）",
    date: "2021年",
    summary: "教科書無償配布ボランティア「STARCLE」の活動に対し、VA活動支援賞・三交インホテルズ賞を受賞。※団体受賞",
    details: `<p class="mb-4">教科書無償配布ボランティア「STARCLE」の活動に対し、VA活動支援賞・三交インホテルズ賞を受賞しました。<strong>団体として受賞</strong>した賞です。</p>
<div class="p-4 mt-4 bg-black/5 rounded-lg border border-black/10">
  <h4 class="font-bold text-appleDark mb-3 text-sm">関連リンク</h4>
  <ul class="space-y-2 text-sm">
    <li><a href="https://lion.or.jp/va/about/summary_2021/award_2021.html" target="_blank" rel="noopener noreferrer" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-up-right-from-square mr-2 w-4"></i>受賞者一覧 — VA活動支援賞 2021年度</a></li>
    <li><a href="${b}projects/starcle/" class="text-appleBlue hover:underline flex items-center"><i class="fa-solid fa-arrow-right mr-2 w-4"></i>STARCLE プロジェクト詳細ページ</a></li>
  </ul>
</div>`,
  },
];

export const timeline = [
  {
    year: "2016年4月 - 2022年3月",
    title: "海陽中等教育学校",
    subtitle: "",
    description: "愛知県蒲郡市に位置する全寮制中高一貫校。部活動では映像部に所属し、公式記録動画やイベント用ムービーを多数制作。学園祭パンフレットや生徒会誌のデザインも担当。この時期に独学でHTMLやCSSの学習を開始。",
  },
  {
    year: "2022年4月 - 2026年3月",
    title: "中央大学",
    subtitle: "理工学部 電気電子情報通信工学科",
    description: "電気、電子、情報通信の分野を幅広く学ぶ。JAXA、産総研、東京農工大などと共同で月面探査ロボットの研究開発を行う研究室に所属し、シミュレーションやJAXA探査実験棟での実証に従事。2025年11月にはオーストラリアでの海外実験にも参加した。",
  },
  {
    year: "2022年9月 - 2026年2月",
    title: "大手プログラミングスクール",
    subtitle: "アルバイト講師",
    description: "3年半にわたり、対面およびオンラインで小学生から高校生までを対象にプログラミングを指導。Unity+C#、Python、Scratchを担当し、受講生の理解度に合わせて説明方法や課題設定を調整した。初学者が自分で作品を完成させられるよう、エラー対応や設計の考え方まで含めて支援した。",
  },
  {
    year: "2022年度 - 2024年度",
    title: "学生ボランティア団体",
    subtitle: "代表補佐・会計（2024年度）",
    description: "100名規模の学生団体に所属し、2024年度には代表補佐と会計を担当。会計管理に加え、属人的だった運営ルールの整理や代表選任方法の明文化など、団体運営を継続しやすい形へ整備した。任期後半は実質的に代表として団体をまとめた。",
  },
  {
    year: "2026年4月 - 2028年3月予定",
    title: "東京科学大学大学院",
    subtitle: "理工学系 工学院 情報通信系",
    description: "大学院へ進学し、ハプティクスの研究に従事する予定。",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/minoru-s", icon: "fa-brands fa-github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/minoru-s/", icon: "fa-brands fa-linkedin-in" },
  { name: "Facebook", url: "https://www.facebook.com/SAITOMlNORU", icon: "fa-brands fa-facebook" },
];

export const contactText = "私のポートフォリオをご覧いただきありがとうございます。ご連絡は、以下のボタンからメールにてお願いいたします。";
