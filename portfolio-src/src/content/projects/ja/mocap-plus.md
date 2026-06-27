---
title: "Mocap Plus"
summary: "研究のボトルネックだったモーションキャプチャ解析を、約20分から約20秒に短縮した自作Webアプリ。研究室でも多くのメンバーに利用してもらった。"
date: 2024-06-01
tags: ["web", "motion-capture", "tools", "data-analysis"]
period: "2024年"
stack: ["HTML", "CSS", "複数のLLM"]
hero: "/img/mocap.png"
demoUrl: "https://minoru-s.github.io/mocap/"
repoUrl: "https://github.com/minoru-s/mocap"
related: ["lunar-robot"]
order: 1
highlights:
  - "解析時間：約20分 → 約20秒に短縮"
  - "研究室で多くのメンバーに利用してもらった"
---

<p class="mb-4">研究では、モーションキャプチャデータの解析に1回あたり約20分かかっていました。そこで、CSVの読み込み、トリミング、可視化、距離計測、グラフ生成をブラウザ上で完結できるツールを開発し、解析作業を約20秒で実行できるようにして、実験後の検証サイクルを大幅に短縮しました。</p>

<p class="mb-4">OptiTrackの解析ソフトMotiveからエクスポートされたCSVファイルに最適化された、ブラウザ完結型のモーションキャプチャデータ解析アプリケーションです。</p>

<p class="mb-4">データをアップロードするだけで、軌跡の可視化や各種データ処理を外部に送信することなく安全かつ手軽に行うことができます。開発にあたっては、GeminiやClaude、ChatGPTなど複数のLLMを活用して効率的に実装を進めました。</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">主な機能</h4>
<ul class="space-y-4 text-sm text-appleDark/80 bg-black/5 p-5 rounded-xl border border-black/10">
  <li class="flex items-start">
    <i class="fa-solid fa-chart-line text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">広域解析ツール</strong>軌跡、ヒートマップ、網羅率の可視化に対応。Z軸の反転や細やかなダウンサンプリングなど、柔軟な表示設定が可能です。</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-filter text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">データ解析および処理ツール</strong>ユーザーが任意に設定できるローパスフィルタやガウシアンフィルタの適用、動作区間の自動検出、データの分散表示やグラフの拡大縮小機能を提供します。</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-scissors text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">データトリミングと距離計測</strong>任意の区間を抽出してMotive互換のCSVとして出力する機能や、指定した2点間のユークリッド距離を測定する機能を搭載しています。</div>
  </li>
  <li class="flex items-start">
    <i class="fa-solid fa-gauge-high text-appleBlue mt-0.5 mr-3 w-4 text-center shrink-0"></i>
    <div><strong class="text-appleDark block mb-1">基準速度算出ツール</strong>クォータニオン形式のエクスポートデータにも対応したトラッキングと速度算出が行えます。</div>
  </li>
</ul>
