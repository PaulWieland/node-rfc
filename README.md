```shell
git checkout master

# ~ package.json version already bumped, before release build

cd doc
make clean
make html
rm -Rf ~/tmp/*
cp -r _build/html/ ~/tmp
cd ..
# ~ commit & push ~

git checkout gh-pages
rm -Rf *.html *.js *.egg build doc _* pyrfc* *.inv node_modules
cp -Rf ~/tmp/html/. .
rm -Rf _sources .buildinfo
# ~ commit & push ~

# tag
# ~ bump VERSION ~
# ~ commit
git tag 0.1.15 c97ad7d29 -m v0.1.15
git push
git push origin --tags

# ~ draft new release, add binaries and changes ~

# npm publish
npm publish

```
