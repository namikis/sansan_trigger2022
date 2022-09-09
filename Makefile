##
# enviroment
##

# dir
SERVER_DIR:=./server
FRONT_DIR:=./front
DB_DIR:=./db
DATA_DIR:=./db/data

# container
FRONT_CONTAINER_NAME:=front-sansan_trigger2022
SERVER_CONTAINER_NAME:=server-sansan_trigger2022
DB_CONTAINER_NAME:=db-sansan_trigger2022

# command
RM := rm -rf



###############
#    Make     #
###############

.PHONY: all
all:start


# docker-compose up
.PHONY: start
start:
	@echo ""
	@echo "------------------------"
	@echo "Start the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose up -d
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""
	@docker-compose ps
	@echo ""


# docker-compose down
# imageやvolumeも削除
.PHONY: down
down:
	@echo ""
	@echo "------------------------"
	@echo "Down the docker-compose environment"
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose down --rmi all --volumes --remove-orphans
	@echo ""
	@echo "The docker-compose environment has been successfully down."
	@echo ""


# dbやcacheは保持したまま再起動
# docker-compose restartとは挙動が違うので注意
.PHONY: restart
restart: down start


.PHONY: delete-db
delete-db:
	@echo ""
	@echo "------------------------"
	@echo "delete db ..."
	@echo ""
	$(RM) $(DATA_DIR)
	@echo ""
	@echo "delete db success"
	@echo "------------------------"
	@echo ""


.PHONY: delete-volumes
delete-volumes: delete-db


.PHONY: clean
clean:


.PHONY: fclean
fclean:clean delete-volumes



# dbやcacheも削除してから再起動
.PHONY: re
re:fclean restart



# lint
.PHONY: lint
lint:
	cd ./server && gofmt -l -w .



# show log
.PHONY: log
log:
	docker-compose logs -f



# docker container attach
.PHONY: attach-front
attach-front:
	docker exec -it $(FRONT_CONTAINER_NAME) /bin/bash

.PHONY: attach-server
attach-server:
	docker exec -it $(SERVER_CONTAINER_NAME) /bin/bash

.PHONY: attach-db
attach-db:
	docker exec -it $(DB_CONTAINER_NAME) /bin/bash

