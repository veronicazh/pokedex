#!/bin/sh
set -e

if [ "$1" = "init" ]; then
  npm i -g startupjs && startupjs "$@"
  exit
fi

# Run MongoDB in background
mongod --bind_ip 0.0.0.0 --nojournal &

# Run Redis in background, disable any persistance
redis-server --save "" --appendonly no &

exec "$@"
