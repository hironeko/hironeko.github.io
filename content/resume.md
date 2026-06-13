---
title: "Resume"
date: 2025-09-18T00:00:00+09:00
lastmod: 2026-06-13T00:00:00+09:00
draft: false
description: "職務経歴・スキル・実績のまとめ（ポートフォリオ）"
layout: "resume-v2"
type: "resume"
name: "hironeko"
role: "Webエンジニア / テックリード / PdM・PjM"
profile: "独学からキャリアをスタートした Web エンジニア。現在はヘルスケア系サービスで技術とプロダクトの統制を担いながら、0→1 の立ち上げやレガシー刷新、スクラムによるチームづくりまで横断的に推進しています。"
summary:
  - "Web エンジニア歴 10 年超。PdM/PjM/スクラムマスターを兼務しながら、事業フェーズに応じて技術と運営を調律。"
  - "得意領域: エンジニアリング、PdM、PjM。モノレポ化・CI/CD 再設計・AWS 運用改善など基盤づくりを一貫してリード。"
  - "リリース後の不具合ゼロ、バグ報告 10％以下、エラー 8 割削減など、品質改善と統制の実績を積み重ねている。"
strengths_lead: "自分の強みは「開発を自ら実行しながら、抽象度の高い課題をタスク実行可能なレベルまで落とし込めること」。"
strengths:
  - name: "プロジェクトリーダーシップ"
    detail: "ステークホルダーとの合意形成、アジャイルイベント設計、マルチハットでの全体推進。"
  - name: "品質向上"
    detail: "テスト文化の導入、エラー削減、手戻り防止の仕組み化により、開発速度と品質を両立。"
  - name: "レガシー改善"
    detail: "リプレイス・リファクタリング・アーキテクチャ刷新を主導し、継続的な改善サイクルを構築。"
  - name: "チーム文化醸成"
    detail: "レビュー文化の定着、研修設計、輪読会運営など、学習する組織づくりを推進。"
  - name: "ビジネス視点"
    detail: "ユーザー課題と技術の橋渡しを担い、意思決定を支援。"
skills:
  - category: "言語"
    items: ["PHP (5 系〜8.3)", "JavaScript", "TypeScript", "Go", "Ruby"]
  - category: "フレームワーク"
    items: ["Laravel", "Vue.js", "Nuxt.js", "React", "Next.js", "Backbone.js", "jQuery", "Symfony", "Ruby on Rails"]
  - category: "データベース"
    items: ["MySQL", "Aurora (MySQL 互換)"]
  - category: "インフラ・ツール"
    items: ["AWS", "Docker", "Terraform", "Ubuntu", "Amazon Linux", "Vagrant", "GitHub Actions", "Terraform Cloud", "OpenID Connect", "Datadog", "Sentry", "Jenkins"]
  - category: "プロセス"
    items: ["スクラム", "アジャイル開発", "テスト駆動開発 (PHPUnit/TDD)"]
experiences:
  - company: "株式会社 O"
    period: "2025年8月〜現在"
    duration: "在籍 約10ヶ月（2026年6月時点）"
    role: "ヘルスケア系サービス企業 / テックリード・PdM/PjM"
    team: "小規模クロスファンクショナルチーム"
    stack: ["AWS", "Docker", "PHP", "Laravel", "Terraform", "GitHub Actions", "Slack", "Confluence"]
    projects:
      - name: "既存プロダクトの開発統制・品質改善・運用改善"
        bullets:
          - "Laravel / JavaScript 構成の既存プロダクトにおいて、設計方針・アーキテクチャ方針の策定、軽微改修、コードレビュー、品質管理を横断的に担当。"
          - "事業部・運用部門からの要望に対し、背景・目的・受入要件を整理し、仕様の解像度を上げたうえで開発タスクへ落とし込み。"
          - "リリーススケジュールの調整、仕様変更時の影響整理、ステークホルダーとの合意形成を行い、開発・運用双方の実行可能性を担保。"
          - "PHPUnit の Feature テストを拡充し、ユニットテスト偏重だった状態から結合観点の品質担保を強化。"
          - "脆弱性診断結果に基づく調査・修正方針の策定、XSS 等のセキュリティ課題への対応、再発防止に向けたレビューを推進。"
          - "インシデント発生時の影響調査、原因整理、暫定対応・恒久対応の方針策定を担当。"
          - "AWS 環境の見直し、IaC 化の計画・実行、権限設計・運用改善を推進。"
          - "業務委託メンバーへのタスク配分、技術補足、コードレビュー、進行管理を担当。"
          - "採用要件整理、候補者評価、開発組織の体制設計にも関与し、PdM / EM / テックリード領域を横断して推進。"
  - company: "株式会社 T"
    period: "2024年3月〜2025年7月"
    duration: "在籍 17ヶ月"
    role: "不動産系 SaaS 事業会社 / エンジニア"
    team: "チーム 8 名"
    stack: ["PHP 8.3", "TypeScript", "Laravel", "Nuxt.js", "Vue", "MySQL", "Ubuntu (コンテナ)", "Docker", "GitHub Actions"]
    projects:
      - name: "メインプロダクト機能開発"
        bullets:
          - "社内初のチーム開発体制を設計し、PdM・仕様把握者・PjM を巻き込んだスクラムライクなイベントを運営。"
          - "複数回のリファイメントで仕様理解と合意形成を行い、手戻りとリリース後バグをゼロに抑制。"
      - name: "社内請求管理システム (0→1)"
        bullets:
          - "ウォーターフォール前提の設計を見直し、アジャイルライクな進行と透明性の高いスケジュール管理を実現。"
          - "PdM・PjM・スクラムマスター・テックリード・アーキテクトを兼務し、開発環境・CI/CD・モノレポ化・テスト方針を策定。"
          - "致命的なバグや手戻りなくリリースし、新規参画者がスムーズに稼働できる体制を整備。"
  - company: "株式会社 F"
    period: "2022年3月〜2024年2月"
    duration: "24ヶ月"
    role: "建築系 SaaS 事業会社 / エンジニア"
    team: "チーム 19 名"
    stack: ["PHP 8.2", "JavaScript", "TypeScript", "Go", "Laravel", "Vue", "Backbone.js", "jQuery", "Next.js", "React", "Aurora (MySQL)", "Amazon Linux (EC2)", "Ubuntu (コンテナ)", "Terraform", "Docker", "Terraform Cloud", "OpenID Connect", "GitHub Actions"]
    projects:
      - name: "新規契約対応機能開発"
        bullets:
          - "国が提示した仕様をもとに要件定義から実装まで一貫対応し、Vue 実装を共通化できる設計を提案・推進。"
      - name: "PHPUnit 導入・テスト文化定着"
        bullets:
          - "勉強会主催と PR レビューを通じ、ほぼ全 PR でテスト実装が行われる体制を構築。"
      - name: "スクラムマスター・SRE 活動"
        bullets:
          - "認定スクラムマスターとして 1on1 やリファイメント運営で PM の自走を支援。"
          - "SRE チーム第一号として Datadog 導入、Laravel 6→9 アップデート、CI 整備、Terraform 化を推進。"
          - "入社半年で社内表彰 2 部門受賞。担当機能のリリース後バグ報告を従来比 10％以下に抑制。"
  - company: "株式会社 R"
    period: "2019年10月〜2022年2月"
    duration: "29ヶ月"
    role: "HR 系 SaaS 事業会社 / エンジニア"
    team: "チーム 14 名"
    stack: ["PHP 8.0", "JavaScript", "Laravel", "Vue", "Nuxt.js", "Aurora (MySQL)", "Ubuntu / Alpine (コンテナ)", "GitHub Actions"]
    projects:
      - name: "モノレポ化と API 実装"
        bullets:
          - "既存コードを新リポジトリへ移行し、PHPUnit Feature テストで品質の土台を構築。"
          - "監査対応のログ管理・承認機能を DB 設計からリードし、運用バグの調査・改修を実施。"
      - name: "フロントエンド改善"
        bullets:
          - "API を活用した UI 実装と UX 改善で利用体験を向上。"
      - name: "技術課題チーム・スクラム運営"
        bullets:
          - "Sentry エラーの即日対応と優先度整理で 2 ヶ月でエラー 8 割削減。"
          - "ユーザーインタビューやビジネスヒアリングを通じて、課題に対するエンジニアリング提案を推進。"
  - company: "株式会社 G"
    period: "2015年5月〜2019年9月"
    duration: "53ヶ月"
    role: "SES 事業会社 / エンジニア"
    team: "社内および出向先"
    stack: ["PHP 5 系", "JavaScript", "Ruby", "Laravel", "FuelPHP", "CodeIgniter", "Silex", "Symfony", "Ruby on Rails", "Vagrant", "React", "Vue"]
    projects:
      - name: "社内教育・受託開発"
        bullets:
          - "新入社員向けエンジニア研修を 0 から設計し、日次でカリキュラム改善しながら教育体制を構築。"
          - "勤怠管理システムをほぼ単独実装し、外部 PM と連携しながら品質とスケジュールを両立。"
      - name: "SES 出向先プロジェクト"
        bullets:
          - "リプレイス案件で Repository パターン導入やレビュー文化の定着を推進。"
          - "ランダムマッチングアプリ開発で SQL チューニング、クラス設計改善、インフラ障害対応（DB フェイルオーバー、Jenkins 再導入）を実施。"
          - "管理ツールを Laravel + Vue へリプレイスし、レビュー・テスト文化や Git Flow ライクな運用を導入。"
links:
  - label: "Top"
    url: "/"
  - label: "About"
    url: "/about/"
  - label: "Posts"
    url: "/posts/"
interests:
  - "スクラム / アジャイル"
  - "プロダクトマネジメント"
  - "組織づくり"
  - "ドメイン駆動設計"
  - "Go / Rust"
  - "観測性・プラットフォーム領域"
  - "音楽・アニメ・読書・人間観察・DJ"
---
