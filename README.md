```shell
git checkout master

# ~ package.json and VERSION musti be bumped, before release build

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
# ~ commit
git checkout master
git tag 0.1.15 c97ad7d29 -m vv0.1.15
git push
git push origin --tags

# ~ draft new release, add binaries and changes ~

# npm publish
npm publish

```
