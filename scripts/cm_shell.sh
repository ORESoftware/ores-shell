#!/usr/bin/env bash

export GOPATH="$PWD/go"

pg_local_connect(){
  psql -x -h '0.0.0.0' -d 'mllsaal_db'
}

pg_prod_connect(){
  psql -x -h '0.0.0.0' -d 'mllsaal_db'
}