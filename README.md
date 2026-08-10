# hironeko portfolio

React Router と shadcn/ui ベースのコンポーネントで構成した個人プロフィールサイトです。Cloudflare Workers 上で動作する構成にしています。

## Local development

```bash
npm install
npm run dev
```

## Validate

```bash
npm run check
```

## Deploy to Cloudflare

初回のみ `npx wrangler login` で認証し、以降は次のコマンドで公開できます。

```bash
npm run deploy
```

Cloudflare の Git integration を利用する場合は、Build command を `npm run build`、Deploy command を `npx wrangler deploy` に設定します。
