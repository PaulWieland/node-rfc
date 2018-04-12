```shell
git checkout master

cd doc
make clean
make html
rm -Rf ~/tmp/*
cp -r _build/html/ ~/tmp

git checkout gh-pages
rm -Rf *.html *.js *.egg build doc _* pyrfc* *.inv
cp -Rf ~/tmp/html/. .
```
