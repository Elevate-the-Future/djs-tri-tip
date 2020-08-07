#!/usr/bin/env bash

echo "====[ SETTING UP GIT ]===="
git config --global user.name "Safin Singh"
git config --global user.email "safin.singh@gmail.com"

echo "====[ COPYING FOLDER ]===="
rm -rf docs/
cp -Rf djs-tri-trip/ docs/

echo "====[ UPDATING VERSION CONTROL ]===="
git add .
git commit -m "Automatically deploy"
git push
