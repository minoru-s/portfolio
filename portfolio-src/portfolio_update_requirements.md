# ポートフォリオ修正 要件書（改訂版 v2）

対象リポジトリ: `minoru-s/portfolio` / 対象ファイル: `index.html`
公開URL: https://minoru-s.github.io/portfolio/

---

## 0. 前提・全体ルール（最初に必ず読むこと）

1. **データは2オブジェクトに二重管理されている。** 日本語は `const portfolioDataJa`、英語は `const portfolioDataEn`。
   **本書の変更は、原則としてJA・ENの両方に反映すること。** 片方だけの修正は不可。
2. UIラベルは `const translations`（今回は触らない）。
3. **既存のデザイン（Tailwind / Liquid Glass調）・スキーマ・JS構造は変更しない。** 各配列要素のフィールド構成（`title` / `description` / `details` / `image` / `techStack` / `links` 等）を踏襲すること。
4. 文字列の編集は **該当箇所のピンポイント置換**で行い、無関係な箇所を壊さないこと。
5. 配列に要素を追加した場合は **JSのカンマ・括弧が壊れていないか必ず確認**すること。
6. 作業後、ブラウザで開いて **コンソールエラーが出ないこと／全セクションが表示されること／JA・EN切替で崩れがないこと**を確認すること。

---

## 1. 【修正】TOEIC取得月（2月 → 3月）

`about` 内のTOEIC表記を修正する。**正しい取得月は2025年3月。**

**JA（`portfolioDataJa.about`）**
```
現在: TOEIC L&R 835点（2025年2月取得）
変更: TOEIC L&R 835点（2025年3月取得）
```
**EN（`portfolioDataEn.about`）**
```
現在: TOEIC L&R 835 (Acquired Feb 2025)
変更: TOEIC L&R 835 (Acquired Mar 2025)
```

---

## 2. 【差し替え】About本文（研究開発で使える強みを先頭に）

`about` 冒頭の `<div class="space-y-4 mb-8">` 内にある2つの `<p>` を差し替える。**その下の情報グリッド（出身地・TOEIC等）は変更しない。**

**JA（`portfolioDataJa.about`）— 該当2段落を置換**
```
現在:
                    <p>プログラミングから動画編集、3D CAD、グラフィックデザインに至るまで、PCを活用した幅広いモノづくりに取り組んできました。自分の作ったものが誰かの役に立つことに、大きなやりがいを感じます。</p>
                    <p>迷ったら、勇気がいる方を選ぶ。を座右の銘として、日々さまざまなことに挑戦しています。</p>

変更:
                    <p>ソフトウェア、ハードウェア、3D CAD、実験解析、映像制作まで、幅広い手段を用いてモノづくりに取り組んできました。学部研究では、月面探査を想定した小型群ロボットの開発に携わり、CAD設計、3Dプリンタでの試作、実機実験、モーションキャプチャ解析、データ可視化ツールの開発までを一貫して経験しました。自分の作ったものが、実験や人の活動を前に進めることにやりがいを感じています。</p>
                    <p>「迷ったら、勇気がいる方を選ぶ」を座右の銘に、好奇心の赴くまま未知の領域にも積極的に挑戦しています。</p>
```

**EN（`portfolioDataEn.about`）— 該当2段落を置換**
```
現在:
                    <p>I have worked on a wide range of creations using PCs, from programming to video editing, 3D CAD, and graphic design. I find great fulfillment when what I make is useful to someone.</p>
                    <p>My motto is "When in doubt, choose the path that requires courage," and I challenge myself with various things every day.</p>

変更:
                    <p>I've worked on making things across a wide range of means — software, hardware, 3D CAD, experimental analysis, and video production. In my undergraduate research, I was involved in developing small swarm robots for lunar exploration, gaining end-to-end experience from CAD design, 3D-printed prototyping, and actual-machine experiments to motion-capture analysis and building data-visualization tools. I find it rewarding when the things I build move experiments and people's activities forward.</p>
                    <p>Guided by my motto, "When in doubt, choose the braver path," I take on unknown territory wherever my curiosity leads.</p>
```

---

## 3. 【加筆】月面研究：「主な担当範囲」箇条書きを追加（スキム対策）

採用担当が長文を読み飛ばす前提で、`research` の月面ロボット項目 `details` に、担当範囲の箇条書きを追加する。
**挿入位置:** 「私は主に、機体のハードウェア改良とシミュレーション環境の構築を担当しました。」の段落の直後（EN は対応する英文の直後）。

**JA（`portfolioDataJa.research` 月面項目の `details`）— 下記ブロックを挿入**
```html
                        <h4 class="font-bold text-appleDark mb-3 mt-8">主な担当範囲</h4>
                        <ul class="space-y-2 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10 mb-4">
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>CADによる跳躍パッドの設計</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>3Dプリンタを用いた試作・改良</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>実機実験とモーションキャプチャによる評価</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>Pythonによるシミュレーション環境の構築</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>モーションキャプチャデータ解析ツールの開発</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>定点映像からの軌跡解析・ヒートマップ生成</div></li>
                            <li class="flex items-start"><i class="fa-solid fa-check text-appleBlue mt-1 mr-3 w-4 text-center shrink-0"></i><div>JAXA探査実験棟および豪州洞窟実験での実証実験参加</div></li>
                        </ul>
```

**EN（`portfolioDataEn.research` 月面項目の `details`）— 下記ブロックを挿入**
```html
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
```

---

## 4. 【加筆】月面研究：本文の数字を補強

> **重要な前提（取り違え厳禁）**
> - **跳躍パッド**＝「実機の試作・改良」の文脈。シミュレーション（数値計算）の話ではない。
> - **シミュレーション**＝「群探査性能の評価」の文脈。跳躍パッドとは無関係。
> - 下記の数字を、それぞれ正しい段落にのみ入れること。両者を混在させない。

### 4-1. 跳躍パッドの段落（試行錯誤の過程を具体化。※最終形状の詳細は出さない）

> **注意:** 跳躍パッドの最終形状は研究対象そのものなので、**具体的な形状名（通称名）や形状の詳細は記載しない。** 「試行錯誤して、複雑な機構に頼らない形で性能を満たし、全機採用された」という"過程と結果"に留めること。

**JA — 段落全体を置換**
```
現在:
機体の改良においては、例えばロボットの跳躍パッドの設計があります。CADによる設計、3Dプリンタでの造形、実機テスト、モーションキャプチャデータを用いた評価というサイクルを反復し、走行性能と跳躍性能のバランスが取れた形状を開発しました。また、JAXA相模原キャンパスの探査実験棟で10日間にわたり実施した実験に向けては、高さ数メートルの砂山を登れるよう、車輪の強度向上や高トルクモータの搭載といった改良を施しました。

変更:
機体の改良においては、例えばロボットの跳躍パッドの設計があります。CADによる設計、3Dプリンタでの造形、実機テスト、モーションキャプチャデータを用いた評価というサイクルを、約2ヶ月で30案以上反復しました。当初は旋回性を高めるために回転機構を設けた案を試しましたが、砂粒の噛み込みで破損したため、複雑な機構に頼らないシンプルな構造で性能を出す方針へ転換しました。最終的に、走行・跳躍・旋回の3性能のバランスが取れた形状にたどり着き、研究室の全ロボットに採用されました。また、JAXA相模原キャンパスの探査実験棟で10日間にわたり実施した実験に向けては、高さ数メートルの砂山を登れるよう、車輪の強度向上や高トルクモータの搭載といった改良を施しました。
```

**EN — 段落全体を置換**
```
現在:
For the hardware improvement, for example, there is the design of the jumping pad of the robot. Through an iterative cycle of CAD design, 3D printing, actual machine testing, and evaluation using motion capture data, we developed a shape that balances running and jumping performance. Also, for the 10-day experiment conducted at the exploration experiment building on the JAXA Sagamihara Campus, we made improvements such as increasing wheel strength and mounting high-torque motors to climb sand dunes several meters high.

変更:
For the hardware improvement, for example, there is the design of the robot's jumping pad. I repeated an iterative cycle of CAD design, 3D printing, actual-machine testing, and evaluation using motion capture data — more than 30 prototypes over about two months. I first tried a design with a rotation mechanism to improve turning, but it broke when sand grains jammed it, so I shifted to drawing performance out of a simpler structure rather than a complex mechanism. I ultimately arrived at a shape that balances running, jumping, and turning, and it was adopted across all robots in the laboratory. Also, for the 10-day experiment conducted at the exploration experiment building on the JAXA Sagamihara Campus, we made improvements such as increasing wheel strength and mounting high-torque motors to climb sand dunes several meters high.
```

### 4-2. シミュレーションの段落（試行回数・逆推定の手法と精度）

**JA — 段落全体を置換**
```
現在:
シミュレーションに関しては、機体に実装されているアルゴリズムを2D環境で再現するプログラムを制作しました。これにより、実環境を模擬した複雑な地形で目標の探査率を達成するために必要な機数を算出したり、得られた探査率から元の地形を逆推定するといった検証を行いました。

変更:
シミュレーションに関しては、機体に実装されているアルゴリズムを2D環境で再現するプログラムを制作しました。実環境を模擬した複雑な地形で約3,500回の試行を行い、目標の探査率を達成するために必要な機数を算出しました。さらに、得られた探査率から元の地形を逆推定する検証も行い、この逆推定には勾配ブースティング決定木を用いて約88.6%の精度を達成しました。
```

**EN — 段落全体を置換**
```
現在:
Regarding the simulation, I created a program that reproduces the algorithm implemented in the robot in a 2D environment. With this, we verified aspects such as calculating the number of robots required to achieve the target exploration rate in complex terrain simulating real environments, or inversely estimating the original terrain from the obtained exploration rate.

変更:
Regarding the simulation, I created a program that reproduces the algorithm implemented in the robot in a 2D environment. I ran about 3,500 trials on complex terrain simulating real environments to calculate the number of robots required to achieve the target exploration rate. I also verified inversely estimating the original terrain from the obtained exploration rate; for this inverse estimation I used gradient-boosted decision trees and achieved about 88.6% accuracy.
```

### 4-3. 豪州実験の選抜（分母を明示：24名中5名）

**JA（豪州段落内の該当部分のみ置換）**
```
現在: 研究室を代表する選抜メンバー5名のうちの1人として参加し
変更: 研究室に在籍する24名から選抜された5名のうちの1人として参加し
```
**EN（同上）**
```
現在: I participated as one of the 5 selected members representing the laboratory
変更: I participated as one of 5 members selected from the 24 in the laboratory
```

---

## 5. 【差し替え】Mocap Plus：「作った」→「研究のボトルネックを解消した」へ

`projects` の Mocap Plus 項目を、効果起点の記述に変える。

### 5-1. `description` を置換

**JA**
```
現在: モーションキャプチャの出力データを添付するだけでさまざまな解析が行えるアプリ。
変更: 研究のボトルネックだったモーションキャプチャ解析を、約20分から約20秒に短縮した自作Webアプリ。研究室の標準解析ツールとして運用されています。
```
**EN**
```
現在: An app that performs various analyses just by attaching motion capture output data.
変更: A self-built web app that cut the motion-capture analysis bottleneck in my research from about 20 minutes to about 20 seconds. Used as the lab's standard analysis tool.
```

### 5-2. `details` の冒頭に効果段落を挿入

**挿入位置:** `details` の一番先頭（既存の「OptiTrackの解析ソフトMotive…」段落の前）。

**JA（`details` 先頭に挿入）**
```html
                        <p class="mb-4">研究では、モーションキャプチャデータの解析に1回あたり約20分かかっていました。そこで、CSVの読み込み、トリミング、可視化、距離計測、グラフ生成をブラウザ上で完結できるツールを開発し、解析作業を約20秒で実行できるようにして、実験後の検証サイクルを大幅に短縮しました。</p>
```
**EN（`details` 先頭に挿入）**
```html
                        <p class="mb-4">In my research, analyzing motion-capture data took about 20 minutes per run. So I built a tool that handles CSV import, trimming, visualization, distance measurement, and graph generation entirely in the browser, bringing the analysis down to about 20 seconds and greatly shortening the post-experiment verification cycle.</p>
```

---

## 6. 【追加】学生向け情報Webメディア（強い匿名化で掲載）

> **匿名ルール（必読・厳守）**
> この媒体は匿名運営で、出身大学名はポートフォリオ上で公開されており、かつ媒体はGoogleにインデックスされている。**逆引きで所有者が特定されないよう、以下を厳守する。**
> - **媒体名・URL・SNSアカウントは一切記載しない**（`links: []`）。
> - **具体的なツール名（GPA計算機・自販機マップ・グルメマップ等）は記載しない。**（検索で実媒体に到達できてしまうため）
> - **「同じ大学／自分の大学の学生向け」といった、出身大学に紐づく表現は使わない。** 一般的な「学生向け」に留める。
> - **画像は実サイトのスクリーンショットを使わない。** 中身が特定できない抽象的な画像を使う。
> - 体制づくりの苦労・反省といった"ESの振り返り"は載せない（ポートフォリオには不要）。

`projects` 配列に下記を**新規追加**する（JA → `portfolioDataJa.projects`、EN → `portfolioDataEn.projects`）。配置は Mocap Plus の近く（配列上位）を推奨、順序は調整可。

**JA（`portfolioDataJa.projects` に追加）**
```javascript
{
    title: "学生向け情報Webメディアの運営",
    description: "学生に役立つ情報を届けるために個人で立ち上げ・運営した情報Webメディア。記事の執筆やWebツールの開発を通じて、年間10万PV以上・SNSフォロワー2000人以上の媒体へと成長させた。",
    details: `
        <p class="mb-4">学生に役立つ情報を届けたいという思いから、個人でWebメディアを立ち上げ、運営しました。記事の執筆に加え、学生生活で役立つWebツールの自作・公開やSEO対策にも取り組み、年間10万PV以上・SNSフォロワー2000人以上に利用される媒体へと成長させました。</p>
    `,
    image: "img/webmedia.png",
    techStack: ["HTML", "CSS", "JavaScript", "SEO"],
    links: []
}
```

**EN（`portfolioDataEn.projects` に追加）**
```javascript
{
    title: "Running a Web Media for Students",
    description: "An information web media I personally founded and operated to deliver useful information to students. Through writing articles and building web tools, I grew it into a medium with 100,000+ page views per year and 2,000+ social media followers.",
    details: `
        <p class="mb-4">Wanting to deliver useful information to students, I personally launched and operated a web media. In addition to writing articles, I built and released web tools helpful for student life and worked on SEO, growing it into a medium used by 100,000+ page views a year with 2,000+ followers.</p>
    `,
    image: "img/webmedia.png",
    techStack: ["HTML", "CSS", "JavaScript", "SEO"],
    links: []
}
```

**画像について:** `img/webmedia.png` は未用意。中身が特定できない抽象的な画像（汎用的なWeb／メディアを連想させるイラストや幾何学パターン等）を別途用意して配置すること。実サイトのスクショは不可。未用意の間も他プロジェクト同様 `onerror` フォールバックで表示崩れが起きないか確認すること。

---

## 7. 【追加】Experience：100名規模ボランティア団体

`timeline`（Experience & Education セクション）に下記を**新規追加**する。**ProjectsではなくExperience（timeline）に置く。** 配置は時系列順（中央大学／プログラミングスクールの近辺）。
**年次は仮置き。本人が正しい期間を確定すること。**

**JA（`portfolioDataJa.timeline` に追加）**
```javascript
{
    year: "2024年 - 2025年（要確認）",
    title: "学生ボランティア団体",
    subtitle: "代表補佐・会計",
    description: "100名規模の学生団体で代表補佐と会計を担当。会計管理に加え、属人的だった運営ルールの整理や代表選任方法の明文化など、団体運営を継続しやすい形へ整備した。任期後半は実質的に代表として団体をまとめた。"
}
```
**EN（`portfolioDataEn.timeline` に追加）**
```javascript
{
    year: "2024 - 2025 (TBC)",
    title: "Student Volunteer Organization",
    subtitle: "Deputy Representative & Treasurer",
    description: "Served as deputy representative and treasurer of a 100-member student organization. Beyond managing finances, I organized previously person-dependent operating rules and codified the officer-selection process, putting the organization on a more sustainable footing. In the latter half of the term, I effectively led the organization."
}
```

---

## 8. 【差し替え】Experience：プログラミング講師の記述を強化（匿名は維持）

`timeline` のプログラミングスクール項目について、**`title`「大手プログラミングスクール」/ `subtitle`「アルバイト講師」は変更しない（匿名維持）。** `description` のみ差し替える。

**JA（`portfolioDataJa.timeline` のプログラミングスクール項目 `description`）**
```
現在: 3年半にわたり、対面およびオンラインで小学生から高校生までを対象にプログラミングを指導。主にUnity+C#、Python、Scratchを担当した。
変更: 3年半にわたり、対面およびオンラインで小学生から高校生までを対象にプログラミングを指導。Unity+C#、Python、Scratchを担当し、受講生の理解度に合わせて説明方法や課題設定を調整した。初学者が自分で作品を完成させられるよう、エラー対応や設計の考え方まで含めて支援した。
```
**EN（`portfolioDataEn.timeline` の Major Programming School 項目 `description`）**
```
現在: For three and a half years, I taught programming to students ranging from elementary to high school both in person and online. Mainly taught Unity+C#, Python, and Scratch.
変更: For three and a half years, I taught programming to students from elementary to high school, both in person and online. I covered Unity+C#, Python, and Scratch, adapting my explanations and assignments to each learner's level. To help beginners complete their own creations, I supported them through debugging and design thinking as well.
```

---

## 9. 【追加・修正】スキル（`skills`）

### 9-1. AIコーディングツールを追加
`skills` の **"Tools & OS" カテゴリの `items`** に、`Local LLM` 項目の直後へ以下を追加（`level` は本人の体感で調整可。カンマ整合に注意）。

**JA（`portfolioDataJa.skills` → "Tools & OS"）**
```javascript
{ name: "GitHub Copilot", level: 2, note: "コーディング補助" },
{ name: "Antigravity", level: 2, note: "AIエージェント型開発環境" },
{ name: "Continue", level: 1, note: "エディタ拡張・ローカルLLM連携" }
```
**EN（`portfolioDataEn.skills` → "Tools & OS"）**
```javascript
{ name: "GitHub Copilot", level: 2, note: "Coding assistance" },
{ name: "Antigravity", level: 2, note: "AI agent dev environment" },
{ name: "Continue", level: 1, note: "Editor extension / local LLM" }
```

### 9-2. Ruby の補足をRails経験に更新
**JA（"Programming"）**
```
現在: { name: "Ruby", level: 1, note: "基礎" }
変更: { name: "Ruby", level: 1, note: "Ruby on Railsでの開発経験" }
```
**EN（"Programming"）**
```
現在: { name: "Ruby", level: 1, note: "Basics" }
変更: { name: "Ruby", level: 1, note: "Web dev with Ruby on Rails" }
```

### 9-3.（任意）Exploratory を追加（優先度低）
"Tools & OS" に追加してもよい。
- JA: `{ name: "Exploratory", level: 1, note: "データ解析" }`
- EN: `{ name: "Exploratory", level: 1, note: "Data analysis" }`

---

## 10. 【修正】ポートフォリオ作品のデモリンク（`#` → 実URL）

`projects` の「個人ポートフォリオサイト」/「Personal Portfolio Site」項目で、`demo` リンクの `url` がプレースホルダ `"#"` のまま。実URLに修正（JA・EN両方）。
```
現在: { type: "demo", url: "#", icon: "fa-solid fa-arrow-up-right-from-square" }
変更: { type: "demo", url: "https://minoru-s.github.io/portfolio/", icon: "fa-solid fa-arrow-up-right-from-square" }
```

---

## 11. 完了条件チェックリスト

- [ ] 1〜10章のすべての変更を **JA・EN両方**に反映した
- [ ] 取り違え厳禁の前提（跳躍パッド＝実機 / シミュレーション＝群探査評価）を守った
- [ ] 跳躍パッドの**最終形状の詳細（通称名・形状名）を記載していない**
- [ ] 学生Webメディアに、**媒体名・URL・SNS・具体ツール名・出身大学への紐付け・実サイトのスクショを載せていない**（`links: []`）
- [ ] ボランティア団体は **Projectsではなく Experience（timeline）** に入れた
- [ ] プログラミングスクールは **匿名のまま（title/subtitle不変）** で description のみ強化した
- [ ] 配列要素の追加でJSのカンマ・括弧が壊れていない
- [ ] ブラウザで開いてコンソールエラーが出ない／全セクションが表示される／JA・EN切替で崩れがない
- [ ] 追加・修正したリンクが正しく開く

---

## 補足：本人側で要対応

1. `img/webmedia.png`（抽象画像。スクショ不可）を用意する。
2. ボランティア団体の **活動期間（年次）** を確定する（本書は仮置き「2024 - 2025 / 要確認」）。
3. スキルの AIツールの `level` を体感に合わせて調整する。
