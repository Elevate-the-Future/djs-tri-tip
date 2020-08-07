#!/usr/bin/env bash

echo "====[ COPYING FOLDER ]===="
rm -rf docs/
cp -Rf djs-tri-trip/ docs/

echo "====[ UPDATING VERSION CONTROL ]===="
read -p "Commit message: " message

git add .
git commit -m "$message"
git push
