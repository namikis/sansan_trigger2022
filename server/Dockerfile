FROM golang:1.17.0-alpine

RUN apk update && apk add git

WORKDIR /go/src/github.com/namikis/sansan_trigger2022
COPY . .

EXPOSE 8080
CMD [ "go", "run", "." ]
