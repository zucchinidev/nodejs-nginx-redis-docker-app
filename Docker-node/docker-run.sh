#!/usr/bin/env bash
docker run -d --name nodejs --link redis -p 3030:3030 zucchinidev/dockerizing-nodejs-app