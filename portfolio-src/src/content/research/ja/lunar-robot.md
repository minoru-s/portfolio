---
title: "月面探査ロボットの研究開発"
summary: "月の溶岩洞窟探査を目的とした小型群ロボットの研究開発。JAXAや産総研との共同プロジェクトとして、ハードウェア改良からシミュレーション構築、JAXA探査実験棟での実証実験、オーストラリア洞窟実験まで幅広く経験。"
date: 2025-04-01
tags: ["robotics", "simulation", "motion-capture", "3d-printing", "data-analysis", "space"]
period: "2025年度 - 学部4年"
organization: "中央大学 理工学部 電気電子情報通信工学科"
role: "研究員（ハードウェア改良・シミュレーション環境構築）"
stack: ["Python", "CAD", "3Dプリンタ", "OptiTrack", "Markforged"]
hero: "/img/moon1.png"
related: ["mocap-plus"]
order: 1
highlights:
  - "JAXA・産総研等との共同研究（ムーンショット事業採択）"
  - "跳躍パッドを2ヶ月・30案以上試行し研究室の多くの機体に採用"
  - "研究室24名中5名選抜でオーストラリア実験参加"
---

<p class="mb-4">学部4年次は中央大学の國井研究室に所属し、月に存在するとされる溶岩洞窟の探査を目的とした、跳躍可能な小型群ロボットの研究開発を行いました。この研究はムーンショット型研究開発事業に採択されており、JAXAや産業技術総合研究所、東京農工大学などと共同で進めていたものです。</p>

<div class="my-6">
  <img src="/portfolio/img/moon1.png" alt="國井研究室で開発していた小型群ロボット" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.src='https://images.unsplash.com/photo-1614729939124-03290b5509ce?auto=format&fit=crop&q=80&w=800'; this.onerror=null;">
  <p class="text-xs text-appleGray text-center">國井研究室で開発していた小型群ロボット「RED」</p>
</div>

<h4 class="font-bold text-appleDark mb-3 mt-8">機体の改良と実験</h4>
<p class="mb-4">私は主に、機体のハードウェア改良とシミュレーション環境の構築を担当しました。</p>

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

<p class="mb-4">機体の改良においては、例えばロボットの跳躍パッドの設計があります。CADによる設計、3Dプリンタでの造形、実機テスト、モーションキャプチャデータを用いた評価というサイクルを、<a href="https://tsurukai-haru.github.io/tsurukai-portfolio/" target="_blank" rel="noopener noreferrer" class="font-medium text-appleBlue hover:underline transition-colors">同期</a>と協力して約2ヶ月で30案以上反復しました。当初は旋回性を高めるために回転機構を設けた案を試しましたが、砂粒の噛み込みで破損したため、複雑な機構に頼らないシンプルな構造で性能を出す方針へ転換しました。最終的に、走行・跳躍・旋回の3性能のバランスが取れた形状にたどり着き、研究室の多くの機体に採用されました。また、JAXA相模原キャンパスの探査実験棟で10日間にわたり実施した実験に向けては、高さ数メートルの砂山を登れるよう、車輪の強度向上や高トルクモータの搭載といった改良を施しました。</p>

<div class="my-6">
  <img src="/portfolio/img/moon2.png" alt="実験のデータ収集に使用するモーションキャプチャ" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.style.display='none'">
  <p class="text-xs text-appleGray text-center">実験のデータ収集に使用するモーションキャプチャ</p>
</div>

<p class="mb-4">さらに、実験におけるモーションキャプチャデータの解析に時間を要することが課題となっていたため、エクスポートデータを読み込むだけで最適なデータトリミングと自動解析を行うアプリケーションも独自に開発しました。詳細については<a href="/portfolio/projects/mocap-plus/" class="font-medium text-appleBlue hover:underline transition-colors">Mocap Plusのページ</a>をご覧ください。</p>

<h4 class="font-bold text-appleDark mb-3 mt-8">シミュレーション環境の構築</h4>
<p class="mb-4">シミュレーションに関しては、機体に実装されているアルゴリズムを2D環境で再現するプログラムを制作しました。実環境を模擬した複雑な地形で約3,500回の試行を行い、目標の探査率を達成するために必要な機数を算出しました。さらに、得られた探査率から元の地形を逆推定する検証も行い、この逆推定には勾配ブースティング決定木を用いて約88.6%の精度を達成しました。</p>

<div class="my-6">
  <img src="/portfolio/img/moon3.png" alt="シミュレーション結果の一部" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2" onerror="this.style.display='none'">
  <p class="text-xs text-appleGray text-center">シミュレーション結果の一部</p>
</div>

<h4 class="font-bold text-appleDark mb-3 mt-8">オーストラリアでの洞窟実証実験</h4>
<p class="mb-4">プロジェクトの一環として、従来の共同研究機関に加え、オーストラリアの国立科学機関CSIROと共同で、クイーンズランド州の洞窟において実機を用いた実証実験が行われました。私は研究室に在籍する24名から選抜された5名のうちの1人として参加し、有用なデータを取得することができました。</p>

<div class="my-6">
  <img src="https://www.isas.jaxa.jp/topics/files/20260319_3.png" alt="ヒートマップ解析データ" class="w-full rounded-xl border border-black/10 object-cover shadow-sm mb-2">
  <p class="text-xs text-appleGray text-center">私が定点映像からヒートマップ解析を実施したもの</p>
</div>

<p class="mb-4">洞窟環境下では、モーションキャプチャのような精密な測位システムを利用できません。そこで、定点カメラの映像からロボットのLED光や機体の色を追跡し、移動軌跡と探査状況のヒートマップを描画するプログラムを開発することで、実験データの可視化に貢献しました。</p>

<div class="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-4">
  <a href="https://moonshot.r.chuo-u.ac.jp/kunii/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-5 py-2.5 bg-appleDark text-white hover:bg-black rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>國井ムーンショットプロジェクト
  </a>
  <a href="https://www.hmsl.elect.chuo-u.ac.jp/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-5 py-2.5 bg-appleDark text-white hover:bg-black rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>中央大学國井研究室
  </a>
</div>
