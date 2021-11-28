#!/bin/sh
docker volume create portfolio_mariadb_data
docker volume create portfolio_mariadb_logs
docker run -v portfolio_mariadb_data:/tmp busybox chown -R 27:27 /tmp
docker run -v portfolio_mariadb_logs:/tmp busybox chown -R 27:27 /tmp
