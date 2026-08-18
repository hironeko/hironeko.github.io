import { ArrowLeft, FileDown, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const productApproach = [
  {
    title: "課題を捉える",
    description: "利用者が何に困っているか、現在の業務がどう回っているかを確認する。",
  },
  {
    title: "範囲を決める",
    description: "やること／やらないことを分け、期日と制約の中で最も価値を出せる範囲と順序を決める。",
  },
  {
    title: "開発可能にする",
    description: "受入条件、技術・品質・運用リスクを整理し、チームが判断できる要件へ具体化する。",
  },
  {
    title: "小さく届ける",
    description: "品質を保ちながら段階的にリリースし、得られた情報を次の改善へ反映する。",
  },
];

const personalProjects = [
  {
    name: "gh-trends",
    kind: "GitHub CLI Extension / Go",
    url: "https://github.com/hironeko/gh-trends",
    description:
      "GitHub上のPR、リードタイム、リリース頻度、コードレビュー、GitHub Actionsを月次・年次で分析し、開発フローの変化を可視化するGitHub CLI拡張。",
    details: "Go · 日本語・英語対応 · MIT License",
  },
];

const resumeSummary =
  "Webエンジニアとして10年、直近はPdM・テックリードとしてプロダクトの要求定義と技術基盤の双方を担当しています。利用者の業務、市場の需要、監査要件から達成すべきゴールと採らない方針を定義し、組織規模や運用体制から逆算したアーキテクチャ選定・実装まで一貫して担います。個社要望をドメイン課題として再定義した汎用機能化、IPO監査対応システムの0→1立ち上げ、本番Hotfixリリース年65件から2件、開発リードタイム5分の1への短縮など、プロダクトと開発プロセスの双方で成果を出してきました。開発フローを可視化するGitHub CLI拡張（gh-trends）を個人開発・公開しています。";

const experience = [
  {
    company: "O社",
    period: "2025.08 — 現在",
    role: "ヘルスケア系サービス / PdM・テックリード",
    stack: "PHP · Laravel · JavaScript · AWS · Docker · Terraform · GitHub Actions",
    projects: [
      {
        title: "個社要望をドメイン課題として再定義し、汎用機能へ転換",
        bullets: [
          "特定顧客向けの個社対応として起票された案件に対し、既存機能を流用する短期対応を採らず、「システム上に代理店という概念が存在しない」というドメインモデルの欠落として課題を再定義。",
          "複数の保険商品を扱う代理店の増加を前提に、解決された状態、やらないこと、実装対象機能を定義。特定顧客だけで閉じない汎用機能として設計・実装。",
          "本番運用へ乗せ、後続の代理店には追加開発なしで対応可能な状態を実現。",
        ],
      },
      {
        title: "理想フローを開発可能な要件へ再定義",
        bullets: [
          "業務側から理想とするフローのみが提示される案件では、必要な情報を収集し、解決された状態・課題・背景・業務上の必須要件を定義。理想を一括で実現する方針を採らず、リリース時点で必要な対応要件へスコープを絞った。",
          "エンジニアと設計方針・アーキテクチャを検討し、UIモックの先行実装を依頼。運用担当との認識合わせと合意形成を行い、実装可能な要件へ落とし込んだ。",
        ],
      },
      {
        title: "期日直前の複数機能拡張に対する優先順位判断",
        bullets: [
          "新年度に展開予定の複数の機能拡張で、詳細が期日直前に共有される状況に対し、各機能の業務発生タイミング、依存関係、必須要件から優先順位とリリース範囲を判断。エンジニアとスケジュールを組み立てた。",
          "請求処理が機能リリース後に発生するという業務上のラグを踏まえ、請求機能自体の改修か否かを基準に、請求関連対応を後続フェーズへ分離できるかを案件ごとに判断した。",
          "これらの判断に基づき、複数の機能拡張を期日までに提供した。",
        ],
      },
      {
        title: "品質・リリース体制の再構築",
        bullets: [
          "既知のバグを報告後にトリアージし、影響度と緊急度からHotfixまたは次回リリースへの組み込みを判断。参画後の本番リバートは0件。",
          "品質管理とリリース判断を見直し、本番Hotfixリリース数を前年度の65件から2件へ削減。",
          "開発リードタイムを最長だった時期の5分の1へ短縮し、定期的にリリースできる流れを確立。",
        ],
      },
      {
        title: "設計・技術基盤とチームづくり",
        bullets: [
          "既存プロダクトの設計、アーキテクチャ検討、コードレビュー、品質改善を担当。",
          "PHPUnitのFeatureテスト、脆弱性対応、インシデントの原因分析と恒久対応、AWS・IaC・権限設計の見直しを推進。",
          "業務委託メンバーが自律して開発できるよう、担当範囲・判断基準・レビュー体制を設計。採用要件、候補者評価、必要な組織体制も整理。",
        ],
      },
    ],
  },
  {
    company: "T社",
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
        title: "IPO監査対応を目的とした社内請求管理システムの0→1開発",
        bullets: [
          "当初提示されたUI・データ構造をそのまま実装する方針を採らず、経理業務とIPO監査への対応に必要な観点が不足していると判断。達成すべきゴールを再定義し、組閣されたチーム内で共通認識を形成。",
          "少人数で開発・運用し、将来も大幅な増員を前提としない社内システムと捉え、フロントエンドとバックエンドを1リポジトリで扱うモノレポを選択。作業と変更管理の効率を優先。",
          "過度なクリーンアーキテクチャやDDDの全面採用は避け、必要な考え方だけを取り入れたレイヤードアーキテクチャを設計。ControllerからUseCaseを介してServiceを呼ぶ依存ルールを定め、担当者が入れ替わっても処理フローが崩れにくい構成とした。",
          "監査対応に加え、経理担当へ日々の業務課題をヒアリング。簡易UIと解決後の状態を共有して合意を取り、仕様と実装へ落とし込んだ。CI/CD、テスト方針、オンボーディングも整備し、重大な不具合なくリリース。",
        ],
      },
    ],
  },
  {
    company: "F社",
    period: "2022.03 — 2024.02",
    role: "建築系SaaS / エンジニア・スクラムマスター・SRE",
    stack: "PHP · TypeScript · Go · Laravel · Vue · React · Next.js · AWS · Terraform · Docker",
    projects: [
      {
        title: "需要と期日から優先順位を決めた新規機能の段階リリース",
        bullets: [
          "複数の様式への対応が求められる一方、実装に必要な情報・定義が揃っておらず、パターン数も多く、外部の受託会社との連携も必要なため、期日までの全量実装は不可能と判断。すべてを同時に進める方針を採らなかった。",
          "利用需要が高い様式から順に対象を決定。初回の対象と後続対応を切り分け、段階的にリリースした。",
          "既存のVue実装は共通化を前提とした構成ではなかったため、個別の様式ごとに実装を増やす設計を避け、共通部分を再利用しながら新しい様式を追加しやすい構造へ設計・実装した。",
        ],
      },
      {
        title: "テスト文化の導入",
        bullets: [
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
    company: "R社",
    period: "2019.10 — 2022.02",
    role: "人事系SaaS / エンジニア",
    stack: "PHP · JavaScript · Laravel · Vue · Nuxt · Aurora · GitHub Actions",
    projects: [
      {
        title: "機能開発・品質課題の改善",
        bullets: [
          "Laravel / NuxtによるAPI・画面開発を担当。モノレポ化に伴うコード移行ではPHPUnitのFeatureテストを整備し、監査ログ・承認機能はDB設計から実装。既存画面のUXも改善。",
          "Sentryに多数のエラーが記録される状態に対し、Sentry当番を設置。即日修正できるものは迅速にリリースし、原因が深いものは調査結果と対応方針をチームで共有して優先度を判断する運用へ変更。",
          "エラーの原因と再発防止策をリファインメント・プランニングへ反映し、考慮漏れを減らす進め方を定着。チーム発足から2か月でエラー発生率を80%削減。",
          "ビジネスサイドへのヒアリングと社内外のユーザーインタビューからストーリーを作成し、事業課題に対する解決案をエンジニアリングの観点から提案。",
        ],
      },
      {
        title: "大手他社との協業プロジェクト",
        bullets: [
          "明確な役職はなかったものの社内リーダー相当として、仕様とストーリーの作成、実装対象とスケジュールの判断、他社・社内他部署との合意形成を担当。",
          "メイン開発チームへタスクと仕様を移譲しながら、自らも必要機能を実装してメンバーを支援。上長不在時にはスコープ判断と代替案の提示を担い、リリースまで完走。",
        ],
      },
    ],
  },
  {
    company: "G社",
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
    "要求定義と技術基盤の双方を担うテックPdM・エンジニアリングマネージャー hironekoのResumeです。";

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
            <a href="#approach">進め方</a>
            <a href="#experience">職務経歴</a>
            <a href="#personal-projects">個人開発</a>
          </nav>
          <div className="header-actions">
            <Link className="resume-shortcut" to="/">
              トップ
            </Link>
            <Button asChild className="print-button" variant="ghost" size="sm">
              <a href="/hironeko-resume.pdf" download="hironeko-resume.pdf">
                <FileDown aria-hidden="true" />
                PDFをダウンロード
              </a>
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
            <p className="resume-role">テックPdM / エンジニアリングマネージャー</p>
          </div>
          <p className="resume-lead">{resumeSummary}</p>
        </section>

        <section id="approach" className="page-shell resume-section">
          <header className="resume-section-header">
            <h2>プロダクト開発の進め方</h2>
            <p>
              実装を始めてから課題を見つけるのではなく、利用者・事業・運用・開発を早い段階でつなぎ、
              作るべきものと品質条件の解像度を上げます。
            </p>
          </header>
          <ol className="resume-approach-list">
            {productApproach.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className="page-shell resume-section">
          <header className="resume-section-header">
            <h2>職務経歴</h2>
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

        <section id="personal-projects" className="page-shell resume-section">
          <header className="resume-section-header">
            <h2>個人開発</h2>
            <p>業務外で開発・公開しているプロダクトです。</p>
          </header>
          <div className="resume-personal-projects">
            {personalProjects.map((project) => (
              <article className="resume-personal-project" key={project.name}>
                <div>
                  <p>{project.kind}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="resume-personal-description">{project.description}</p>
                <p className="resume-stack">{project.details}</p>
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGithub aria-hidden="true" />
                  GitHubで見る
                </a>
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

      <article className="resume-print-document">
        <header className="print-document-header">
          <div>
            <p>職務経歴書</p>
            <h1>hironeko</h1>
          </div>
          <p>テックPdM / エンジニアリングマネージャー</p>
        </header>

        <section className="print-document-section">
          <h2>職務要約</h2>
          <p className="print-summary">{resumeSummary}</p>
        </section>

        <section className="print-document-section print-experience-section">
          <h2>職務経歴</h2>
          {experience.map((job, index) => (
            <section
              className={`print-job${index === 0 || index === 2 ? " print-page-break-after" : ""}${index === 3 ? " print-page-top" : ""}`}
              key={`print-${job.company}-${job.period}`}
            >
              <header className="print-job-header">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <time>{job.period}</time>
              </header>
              <dl className="print-job-meta">
                <dt>技術環境</dt>
                <dd>{job.stack}</dd>
              </dl>
              <div className="print-job-projects">
                {job.projects.map((project) => (
                  <section className="print-job-project" key={`print-${project.title}`}>
                    <h4>{project.title}</h4>
                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={`print-${bullet}`}>{bullet}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="print-document-section print-personal-section">
          <h2>個人開発</h2>
          {personalProjects.map((project) => (
            <article className="print-personal-project" key={`print-${project.name}`}>
              <header>
                <h3>{project.name}</h3>
                <p>{project.kind}</p>
              </header>
              <p>{project.description}</p>
              <dl>
                <dt>技術・公開情報</dt>
                <dd>{project.details} · {project.url}</dd>
              </dl>
            </article>
          ))}
        </section>

      </article>

      <footer className="page-shell site-footer">
        <p>© {new Date().getFullYear()} hironeko</p>
        <Link to="/">トップへ戻る</Link>
      </footer>
    </div>
  );
}
