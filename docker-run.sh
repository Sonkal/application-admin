#!/usr/bin/env sh
docker run \
  --network mongo-net \
  -e "NODE_ENV=production" \
  -u "node" \
  -m "300M" --memory-swap "1G" \
  -w "/home/node/app" \
  --name "application-admin" \
  --init \
  -p 4200:4200 \
  -d \
  sonkal/application-admin

#docker container run --name application-admin -it -v $(pwd):/opt/app -w /opt/app -p 4200:4200 teracy/angular-cli /bin/bash
