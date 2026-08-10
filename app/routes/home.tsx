import {
  ArrowDown,
  ArrowUpRight,
  CircleAlert,
  Mail,
  RotateCcw,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const experience = [
  { value: "10年+", label: "Web業界" },
  { value: "6年半", label: "BtoB領域" },
  { value: "4年", label: "SES" },
];

const values = [
  {
    title: "テックリード／EM支援",
    description:
      "コードレビュー、品質改善、技術選定を個人の判断で終わらせず、背景と判断軸までチームへ共有します。プロダクトの課題を整理し、開発ロードマップ、必要な体制、採用計画まで設計して、組織が自走できる状態へ導きます。",
  },
  {
    title: "PdM／PjM支援",
    description:
      "要望ヒアリングから目的・受入条件を整理し、実行可能な仕様と計画へ落とし込みます。スクラム導入、関係者との合意形成、進行管理、受け入れ、リリースまでを横断し、複数案件をスケジュール通りに着地させます。",
  },
  {
    title: "レガシー改善",
    description:
      "技術負債とバグを可視化し、段階的なリプレイス・リファクタリング計画、テスト基盤、レビュー文化を整えます。既知のバグはトリアージし、影響度と緊急度に応じてHotfixまたは次回リリースへの組み込みを判断します。",
  },
  {
    title: "AI活用支援",
    description:
      "個人プロダクトの開発や、本業での解析・調査にAIを活用しています。GitHubデータを分析して月次・年次の指標を抽出するツールも開発しました。AGENTS.mdなどの設定をGit管理し、個人の工夫で終わらせず、チームで継続的に利用・改善できる形へ設計します。",
  },
];

const results = [
  {
    icon: RotateCcw,
    value: "0件",
    label: "本番リバート",
    detail: "参画後、担当範囲の本番リバートを0件へ",
  },
  {
    icon: ShieldCheck,
    value: "65 → 2件",
    label: "本番Hotfixリリース数",
    detail: "前年度比で65件から2件へ削減",
  },
  {
    icon: CircleAlert,
    value: "−80%",
    label: "Sentryエラー",
    detail: "優先度整理と即日対応により2か月で削減",
  },
  {
    icon: TimerReset,
    value: "1 / 5",
    label: "開発リードタイム",
    detail: "最長だった時期から5分の1へ短縮し、定期リリースの流れを確立",
  },
];

const capabilities = [
  {
    label: "主力技術",
    content: "PHP / Laravel · Vue / Nuxt · TypeScript · Ruby / Ruby on Rails",
  },
  {
    label: "個人開発",
    content: "React / Next.js · Hono · Python · Go · etc. — 個人開発・趣味の延長として利用",
  },
  {
    label: "基盤・運用",
    content: "AWS · Docker · Terraform · GitHub Actions · Datadog",
  },
  {
    label: "マネジメント",
    content: "エンジニアリングマネジメント · テックリード · スクラムマスター · PdM / PjM",
  },
];

export function meta() {
  const title = "hironeko | Web Engineer / Engineering Manager";
  const description =
    "Web業界で10年超。事業部の立ち上げ、チーム開発の導入、開発組織の改善、0→1のシステム開発やモノリス改善に対応します。";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ];
}

export default function Home() {
  return (
    <div>
      <header className="site-header">
        <div className="page-shell header-inner">
          <a href="#top" className="brand" aria-label="hironeko トップへ">
            hironeko<span>.</span>
          </a>
          <nav className="site-nav" aria-label="メインナビゲーション">
            <a href="#value">できること</a>
            <a href="#results">改善実績</a>
            <a href="/resume/">Resume</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
          <div className="header-actions">
            <a className="resume-shortcut" href="/resume/">
              Resume
            </a>
            <a
              className="social-icon"
              href="https://x.com/home"
              target="_blank"
              rel="noreferrer"
              aria-label="Xを開く"
            >
              <SiX aria-hidden="true" />
            </a>
            <a
              className="social-icon"
              href="https://github.com/hironeko"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHubを開く"
            >
              <SiGithub aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="page-shell intro">
          <p className="eyebrow">Webエンジニア / エンジニアリングマネージャー</p>
          <h1>事業部の立ち上げから、開発組織の改善まで。</h1>
          <div className="intro-body">
            <p>
              ベンチャー企業で、事業部の立ち上げ、チーム開発の導入、
              エンジニアリングマネージャーを経験してきました。
            </p>
            <p>
              テスト文化やレビュー文化の定着、技術負債・バグへの対応を、
              職種を越えて人を巻き込みながら推進します。
            </p>
            <p>
              0→1の新規システム開発から、技術負債を抱えたモノリスの改善まで対応可能です。
            </p>
          </div>
          <div className="intro-actions">
            <Button asChild size="lg">
              <a href="mailto:hironeko.sun+askbygithub@gmail.com">
                相談してみる
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link" href="#value">
              できることを見る
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <dl className="experience-list" aria-label="経験年数">
            {experience.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="value" className="page-shell content-section">
          <header className="section-header">
            <h2>できることと強み</h2>
            <p>
              課題を見つけ、実行可能な計画へ落とし込み、周囲を巻き込みながら、
              組織に変化が残るところまで進めることが強みです。
            </p>
          </header>
          <ol className="value-list">
            {values.map((value, index) => (
              <li key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="results" className="page-shell content-section">
          <header className="section-header">
            <h2>これまでの改善実績</h2>
          </header>
          <dl className="result-list">
            {results.map((result) => {
              const Icon = result.icon;

              return (
                <div key={result.label}>
                  <div className="result-heading">
                    <div className="result-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <dt>{result.label}</dt>
                  </div>
                  <dd>{result.value}</dd>
                  <p>{result.detail}</p>
                </div>
              );
            })}
          </dl>
        </section>

        <section className="page-shell content-section">
          <header className="section-header">
            <h2>技術と役割</h2>
          </header>
          <dl className="capability-list">
            {capabilities.map((capability) => (
              <div key={capability.label}>
                <dt>{capability.label}</dt>
                <dd>{capability.content}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="page-shell content-section contact-section">
          <h2>まずは、課題から話しましょう。</h2>
          <p>
            開発組織の改革、ロードマップ、チーム開発、品質・プロセス改善。
            副業・業務委託のご相談を受け付けています。
          </p>
          <div className="contact-actions">
            <Button asChild size="lg">
              <a href="mailto:hironeko.sun+askbygithub@gmail.com">
                <Mail aria-hidden="true" />
                メールで相談する
              </a>
            </Button>
            <a className="text-link" href="https://github.com/hironeko" target="_blank" rel="noreferrer">
              <SiGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="page-shell site-footer">
        <p>© {new Date().getFullYear()} hironeko</p>
      </footer>
    </div>
  );
}
