# sansan trigger 2022


## Getting Started

一番上の階層にある`docker-compose.env.sample`とおなじ階層に

`docker-compose.env`をつくります

(内容はsampleを参考にしてください)

<br>

以下のコマンドでdocker環境を構築します

```
make
```
(make入れておくと楽です, Macにはもともと入ってたはず)

or

```
docker-compose up -d
```


<br>

## Tips

### front

http://localhost:3000

<br>

### server

http://localhost:8080

<br>


### dbへの接続


以下のコマンドでdbコンテナ内にアクセスします

```
make attach-db
```

その後、以下のコマンドでdbに接続します

($OOには実際の環境変数を入れてください)

```
psql -U $POSTGRES_USER -d $POSTGRES_DB
```