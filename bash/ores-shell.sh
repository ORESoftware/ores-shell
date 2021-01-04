#!/usr/bin/env bash

echo "sourcing: '$0'"

all_cm_export="yep"

if [[ ! "$SHELLOPTS" =~ "allexport" ]]; then
  all_cm_export="nope"
  set -a # we export every declared function using this flag
fi

ores_simple_push()(

  set -eo pipefail;
  git add .
  git add -A

  args=("$@")

  if [[ ${#args[@]} -lt 1 ]]; then
      args+=('squash-this-commit')
  fi


  git commit -am "${args[*]}" || { echo; }
  git push

)


if [[ "$all_cm_export" == "nope" ]]; then
    set +a
fi

echo "done sourcing: '$0'"

