# Minoru SAITO — Portfolio

個人ポートフォリオサイト。研究・プロジェクト・受賞歴・ブログを掲載。

🔗 **https://minoru-s.github.io/portfolio/**

---

## 更新内容（2026年6月）

旧来の静的 HTML 一枚構成から Astro ベースに全面リビルド。

- **Astro 5 + Tailwind CSS v4** による静的サイト生成
- 日本語 / 英語の2言語対応
- Research・Projects・Achievements・Blog の各セクションを独立ページ化
- モーダル（ホーム）→ 詳細ページ への2段階回遊構造
- GitHub Actions による自動デプロイ（main push → GitHub Pages）

**コンテンツ追加分**
- Blog セクションを新設（記事3件追加）
- Projects に3件追加
- Achievements に3件追加

## 技術スタック

| | |
|---|---|
| フレームワーク | Astro 5 |
| スタイリング | Tailwind CSS v4 |
| 言語 | TypeScript |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions |

## 構成

```
portfolio-src/   # Astro プロジェクト
  src/
    pages/       # ルーティング
    content/     # Research・Projects・Blog の記事（Markdown）
    data/        # ja.ts / en.ts（プロフィール・スキル・受賞歴）
    components/  # Header, Footer, ProjectCard, Modal など
    layouts/     # Layout, DetailLayout
  public/img/    # 画像ファイル
.github/
  workflows/
    deploy.yml   # ビルド & デプロイ
```
