# @file   Makefile
# @author Wonhee Jang
#
.PHONY: all build run exec clean

VERSION = 1.0.0
BRANCH=feature/issue3
IMAGE_NAME = qtsky89/portfolio

all: build

build:
	docker build --no-cache -t $(IMAGE_NAME):$(VERSION) --build-arg BRANCH=$(BRANCH) .
	docker push $(IMAGE_NAME):$(VERSION)

run:
	docker run --name portfolio -itd -p 80:80 $(IMAGE_NAME):$(VERSION)

exec:
	docker exec -it portfolio bash

clean:
	docker rm -f portfolio || true

#vim: enc=utf-8 ts=4
