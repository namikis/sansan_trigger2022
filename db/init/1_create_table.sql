-- DB切り替え
\c "hoge"

--テーブルを作成

CREATE TABLE "book" (
  "id"         VARCHAR(255) NOT NULL PRIMARY KEY,
  "title"      VARCHAR(255) NOT NULL
);
