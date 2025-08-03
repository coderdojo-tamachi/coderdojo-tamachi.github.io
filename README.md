# CoderDojoたまち Website

CoderDojoたまちの公式ウェブサイトです。Next.js 15とReact 19を使用して構築されています。

## 🚀 技術スタック

- **フレームワーク**: Next.js 15.4.5
- **UIライブラリ**: React 19.1.1
- **スタイリング**: Tailwind CSS 3.4.17
- **UIコンポーネント**: Radix UI
- **パッケージマネージャー**: pnpm
- **言語**: TypeScript
- **アイコン**: Lucide React

## 📋 前提条件

- Node.js v20.11.0以上
- pnpm v10.14.0以上

## 🛠️ 環境構築

### 1. 依存関係のインストール

このプロジェクトはpnpmを使用しています。npmではなくpnpmを使用してください。

```bash
# pnpmがインストールされていない場合
npm install -g pnpm

# 依存関係のインストール
pnpm install
```

**注意**: このプロジェクトはReact 19を使用しているため、一部のパッケージで互換性警告が表示される場合がありますが、正常に動作します。

### 2. 開発サーバーの起動

```bash
pnpm dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 📁 プロジェクト構造

```
coderdojo-tamachi.github.io/
├── app/                    # Next.js App Router
├── components/             # Reactコンポーネント
├── lib/                    # ユーティリティ関数
├── hooks/                  # カスタムフック
├── styles/                 # スタイルファイル
├── public/                 # 静的ファイル
├── data/                   # データファイル
│   └── events.js          # イベント情報
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # デプロイワークフロー
├── package.json           # 依存関係
├── pnpm-lock.yaml         # pnpmロックファイル
├── tailwind.config.js     # Tailwind CSS設定
├── tsconfig.json          # TypeScript設定
└── next.config.mjs        # Next.js設定
```

## 🎯 利用可能なスクリプト

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# リンターの実行
pnpm lint
```

## 🌐 デプロイ

このプロジェクトはGitHub Pagesでホストされています。

### 自動デプロイ

mainブランチにプッシュすると、GitHub Actionsが自動的にビルドとデプロイを実行します。

### 手動デプロイ

```bash
# プロダクションビルド
pnpm build

# 静的ファイルがoutディレクトリに生成されます
```

## 📊 アクセス解析

このサイトではUmamiを使用してアクセス解析を行っています。

## 🔧 トラブルシューティング

### npm installでエラーが発生する場合

このプロジェクトはpnpmを使用するように設計されています。npm installでエラーが発生した場合は、以下の手順を試してください：

1. `node_modules`フォルダを削除
2. `pnpm install`を実行

### React 19の互換性警告について

一部のパッケージ（例：vaul）でReact 19との互換性警告が表示される場合がありますが、これは正常な動作です。プロジェクトは正常に動作します。

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

プロジェクトへの貢献を歓迎します！プルリクエストやイシューの報告をお気軽にお願いします。

## 📞 お問い合わせ

CoderDojoたまちのホームページに関する課題については、GitHubのイシューまたはプルリクエストを通じてお願いします。
CoderDojoたまちに関するお問い合わせはサイト内の「お問い合わせ」のフォームからお願い足します。
