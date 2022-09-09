# server

# dir

```
/config 環境変数まわり
/domain
    /entity ビジネスモデル
    /repository infraのインターフェースの実装
/infra
    /db dbとの接続
    /repository dbと接続するrepository層の具体的な実装
/presen
    /handler httpリクエストを処理するhandlerの実装、presen層
    /response リクエストを返すresponseオブジェクトの生成
    /router リクエストを処理するhandlerをまとめて管理するrouter
/usecase ビジネスモデルを扱うusecase層
```