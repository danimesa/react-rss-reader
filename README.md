# RSSリーダーコンポーネント実装

## 1. 要件確認
### 以下の要件を確認、実装仕様を検討
- RSS 2.0形式のRSSのURLを読み込んで指定件数表示するRSSリーダーコンポーネントを React/Vue.js/Angularのいずれかで作成
- サーバーサイド言語は不問
- RSS 2.0形式のRSSのURLを読み込む
- 画面仕様
  - RSSタイトル
    - サイトへのリンク
  - 記事
    - 記事タイトル
      - 記事へのリンク
    - author
    - 日時
    - 記事詳細
      - 長い場合一部表示
      - 記事詳細にHTMLが入っている場合はテキスト部分のみを表示する
- RSS 2.0にのみ対応
  - [TechCrunch Japan](https://jp.techcrunch.com/) のRSSフィードを表示できればOK
- コンポーネントの属性としてRSSのURLと最大表示件数を設定可能
- その他
  - お好きなUIフレームワークを使用してください。採用したUIフレームワークに適切なコンポーネントがない場合は合うデザインにしてください。
  -製品としてリリースすることを意識したUI/UX/デザインにしてください。
  -細かい仕様は自身でよいと思うように決めてください。

## 2. フレームワーク選定

- Reactを使用
- サーバサイドは、node.js/express

## 3.　実装検討

- rss feedは、[rss-parser](https://github.com/rbren/rss-parser) を使用
- 要件の"コンポーネントの属性としてRSSのURLと最大表示件数を設定可能"のため、RSSのURLをサーバにリクエストしてfeedを結果として受け取る実装とした。

## 4. 実装

### サーバサイド
- node.js/expressで、apiとして実装

```sh
$ touch .env
$ npm run server
```

### フロントエンド
- React+Chakra ui

```sh
$ npm run start
```
