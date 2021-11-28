# @file   Makefile
# @author Wonhee Jang
#
.PHONY: all build run exec clean

VERSION = 1.1.0
IMAGE_NAME = qtsky89/portfolio_base

all: build

build:
	docker build --no-cache -t $(IMAGE_NAME):$(VERSION) .
	docker push $(IMAGE_NAME):$(VERSION)

run:
	docker run --name portfolio_base -itd -p 80:80 $(IMAGE_NAME):$(VERSION)

exec:
	docker exec -it portfolio_base bash

clean:
	docker rm -f portfolio_base || true

#vim: enc=utf-8 ts=4
