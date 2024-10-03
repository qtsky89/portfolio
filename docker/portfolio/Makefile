# @file   Makefile
# @author Wonhee Jang
#
.PHONY: all build run exec clean push

VERSION = 1.4.2
BRANCH=master
IMAGE_NAME = qtsky89/portfolio

all: build

build:
	docker build --no-cache -t $(IMAGE_NAME):$(VERSION) --build-arg BRANCH=$(BRANCH) .

push:
	docker push $(IMAGE_NAME):$(VERSION)

run:
	docker run --name portfolio -itd -p 80:80 $(IMAGE_NAME):$(VERSION)

exec:
	docker exec -it portfolio bash

clean:
	docker rm -f portfolio || true

#vim: enc=utf-8 ts=4
