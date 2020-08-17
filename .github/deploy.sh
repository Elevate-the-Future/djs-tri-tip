#!/usr/bin/env bash

echo "====[ SETTING UP GIT ]===="
git config --global user.name "Raadwan Masum"
git config --global user.email "piraadwan@gmail.com"

echo "====[ COPYING FOLDER ]===="
rm -rf docs/
cp -Rf djs-tri-trip/ docs/

echo "====[ UPDATING SITE ]===="
git add .
git commit -m "Automatically deploy"
git push
