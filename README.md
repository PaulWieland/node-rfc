```shell
git checkout master

cd doc
make clean
make html
rm -Rf ~/tmp/*
cp -r _build/html/ ~/tmp
cd ..

git checkout gh-pages
rm -Rf *.html *.js *.egg build doc _* pyrfc* *.inv node_modules .buildinfo
cp -Rf ~/tmp/html/. .
```
