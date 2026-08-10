import { ArrowLeft, Mail, Printer } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    title: "実行できるリーダーシップ",
    description:
      "自ら開発に入りながら、抽象度の高い課題を実行可能な計画へ落とし込み、関係者との合意形成からリリースまで推進します。",
  },
  {
    title: "品質と開発速度の改善",
    description:
      "テスト・レビュー文化、バグのトリアージ、定期リリースの仕組みを整え、属人的な頑張りに頼らない改善を進めます。",
  },
  {
    title: "レガシーと組織の改善",
    description:
      "技術負債を可視化して段階的な返済計画をつくり、ロードマップ、必要な体制、採用計画まで一貫して設計します。",
  },
  {
    title: "チームへ広がるAI活用",
    description:
      "解析・調査・個人開発でAIを活用し、AGENTS.mdなどの設定や知見をGit管理してチームで継続利用できる形へ整えます。",
  },
];

const experience = [
  {
    company: "株式会社 O",
    period: "2025.08 — 現在",
    role: "ヘルスケア系サービス / テックリード・PdM / PjM",
    stack: "PHP · Laravel · JavaScript · AWS · Docker · Terraform · GitHub Actions",
    projects: [
      {
        title: "既存プロダクトの開発統制・品質・運用改善",
        bullets: [
          "既存プロダクトの設計、アーキテクチャ検討、コードレビュー、品質改善を担当。",
          "事業部・運用部門の要望をヒアリングし、背景・目的・受入条件を整理して開発計画へ反映。複数の社内案件で、実装以外の工程をリードし予定通りリリース。",
          "既知のバグを報告後にトリアージし、影響度と緊急度からHotfixまたは次回リリースへの組み込みを判断。参画後の本番リバートは0件。",
          "品質管理とリリース判断を見直し、本番Hotfixリリース数を前年度の65件から2件へ削減。",
          "開発リードタイムを最長だった時期の5分の1へ短縮し、定期的にリリースできる流れを確立。",
          "PHPUnitのFeatureテスト、脆弱性対応、インシデントの原因分析と恒久対応、AWS・IaC・権限設計の見直しを推進。",
          "業務委託メンバーのタスク設計・レビュー・進行管理に加え、採用要件、候補者評価、組織体制を整理。",
          "AIによる解析・調査、開発支援のほか、GitHubデータから月次・年次の指標を抽出する分析ツールを開発。",
        ],
      },
    ],
  },
  {
    company: "株式会社 T",
    period: "2024.03 — 2025.07",
    role: "不動産系SaaS / エンジニア",
    stack: "PHP 8.3 · TypeScript · Laravel · Nuxt · Vue · MySQL · Docker · GitHub Actions",
    projects: [
      {
        title: "メインプロダクトのチーム開発・リリースプロセス改善",
        bullets: [
          "チーム開発を意識した進め方を整備し、リファインメントを含むスクラムベースのイベントを導入。",
          "開発メンバー間の連携を強めることでリリース後の不具合を減らし、QAチームと円滑に検証・リリースを進められる状態を構築。",
        ],
      },
      {
        title: "社内請求管理システムの0→1開発",
        bullets: [
          "要望ヒアリングから仕様策定、計画、進行管理、受け入れ、リリースまでを担当。PdM / PjM、スクラムマスター、テックリード、アーキテクトを兼務。",
          "モノレポ、CI/CD、テスト方針を含む開発基盤を設計し、重大な不具合なくリリース。オンボーディングも整備。",
        ],
      },
    ],
  },
  {
    company: "株式会社 F",
    period: "2022.03 — 2024.02",
    role: "建築系SaaS / エンジニア・スクラムマスター・SRE",
    stack: "PHP · TypeScript · Go · Laravel · Vue · React · Next.js · AWS · Terraform · Docker",
    projects: [
      {
        title: "新規機能開発・テスト文化の導入",
        bullets: [
          "行政仕様を読み解いて要件へ落とし込み、新規契約機能の設計・開発を担当。Vueによる共通デザインも整備。",
          "PHPUnitのハンズオン形式の勉強会と、アジャイル開発に関する輪読会を、非エンジニアも巻き込みながら継続開催。",
          "実際の開発でPHPUnitを利用する文化を定着させ、ほぼすべてのPRにテストが付く状態へ改善。",
        ],
      },
      {
        title: "スクラムマスター・SREの立ち上げと基盤改善",
        bullets: [
          "認定スクラムマスターとして1on1やリファインメントを設計し、PMとチームが自律して進められる体制づくりを支援。",
          "SREの立ち上げを経験し、Datadog導入、Terraform Cloudの検証、Laravel 6から9への更新、CIとTerraformの整備を推進。",
        ],
      },
    ],
  },
  {
    company: "株式会社 R",
    period: "2019.10 — 2022.02",
    role: "人事系SaaS / エンジニア",
    stack: "PHP · JavaScript · Laravel · Vue · Nuxt · Aurora · GitHub Actions",
    projects: [
      {
        title: "モノレポ化・機能開発・技術負債の改善",
        bullets: [
          "コード移行とAPI開発、PHPUnitのFeatureテスト、監査ログ・承認機能のDB設計、フロントエンドのUX改善を担当。",
          "技術負債とSentryエラーの優先度を整理し、即日対応を続けることで2か月でエラーを80%削減。",
          "ユーザー・事業部へのヒアリングから課題を整理し、改善案を提案。",
        ],
      },
      {
        title: "大手他社との協業プロジェクト",
        bullets: [
          "社内リーダーとしてプロジェクトを推進し、関係者との調整からリリースまで完走。",
          "要件・優先度・進行を整理する経験を通じて、PL / PdMに必要な合意形成と意思決定のスキルを身につけた。",
        ],
      },
    ],
  },
  {
    company: "株式会社 G",
    period: "2015.05 — 2019.09",
    role: "SES・受託開発 / エンジニア",
    stack: "PHP · JavaScript · Ruby · Laravel · Symfony · Ruby on Rails · React · Vue · Vagrant",
    projects: [
      {
        title: "社内研修・受託開発・複数のSES案件",
        bullets: [
          "新卒・未経験者向けの研修カリキュラムをゼロから設計し、社内勤怠システムの開発を外部PMと進行。",
          "レガシーシステムのリプレイスでRepositoryパターンやレビュー文化を導入。",
          "マッチングサービスのSQLチューニング・クラス設計・障害対応、Laravel / Vueによる管理画面刷新、テスト・Git Flow導入を担当。",
        ],
      },
    ],
  },
];

export function meta() {
  const title = "Resume | hironeko";
  const description =
    "hironekoの強み、職務経歴、プロジェクト実績をまとめたResumeです。";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "profile" },
  ];
}

export default function Resume() {
  return (
    <div className="resume-page">
      <header className="site-header resume-site-header">
        <div className="page-shell header-inner">
          <Link to="/" className="brand" aria-label="hironeko トップへ">
            hironeko<span>.</span>
          </Link>
          <nav className="site-nav resume-nav" aria-label="Resumeナビゲーション">
            <Link to="/">トップ</Link>
            <a href="#strengths">強み</a>
            <a href="#experience">職務経歴</a>
          </nav>
          <div className="header-actions">
            <Link className="resume-shortcut" to="/">
              トップ
            </Link>
            <Button
              className="print-button"
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => window.print()}
            >
              <Printer aria-hidden="true" />
              印刷
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="page-shell resume-intro">
          <Link className="resume-back-link" to="/">
            <ArrowLeft aria-hidden="true" />
            トップへ戻る
          </Link>
          <p className="eyebrow">職務経歴書</p>
          <div className="resume-title-row">
            <div>
              <h1>Resume</h1>
              <p className="resume-name">hironeko</p>
            </div>
            <p className="resume-role">
              Webエンジニア<br />
              テックリード / Engineering Manager<br />
              PdM / PjM
            </p>
          </div>
          <p className="resume-lead">
            ベンチャー企業で事業部の立ち上げ、チーム開発の導入、
            エンジニアリングマネージャーを経験してきました。0→1の新規開発から、
            技術負債を抱えたモノリスの改善、開発組織とプロセスの改革まで横断して推進します。
          </p>
        </section>

        <section id="strengths" className="page-shell resume-section">
          <header className="resume-section-header">
            <h2>強み</h2>
            <p>
              開発を自ら実行しながら、抽象度の高い課題をタスクへ落とし込み、
              周囲を巻き込んで組織に変化が残るところまで進めます。
            </p>
          </header>
          <ol className="resume-strength-list">
            {strengths.map((strength, index) => (
              <li key={strength.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className="page-shell resume-section">
          <header className="resume-section-header">
            <h2>職務経歴</h2>
            <p>会社名はイニシャルで表記しています。</p>
          </header>
          <div className="resume-timeline">
            {experience.map((job) => (
              <article className="resume-job" key={`${job.company}-${job.period}`}>
                <header className="resume-job-header">
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                  <time>{job.period}</time>
                </header>
                <p className="resume-stack">{job.stack}</p>
                <div className="resume-projects">
                  {job.projects.map((project) => (
                    <section className="resume-project" key={project.title}>
                      <h4>{project.title}</h4>
                      <ul>
                        {project.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-shell resume-section resume-contact">
          <div>
            <h2>お問い合わせ</h2>
            <p>副業・業務委託、開発組織やプロダクト改善のご相談を受け付けています。</p>
          </div>
          <div className="contact-actions">
            <Button asChild>
              <a href="mailto:hironeko.sun+askbygithub@gmail.com">
                <Mail aria-hidden="true" />
                メールで相談する
              </a>
            </Button>
            <a
              className="text-link"
              href="https://github.com/hironeko"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="page-shell site-footer">
        <p>© {new Date().getFullYear()} hironeko</p>
        <Link to="/">トップへ戻る</Link>
      </footer>
    </div>
  );
}
