set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:HappyEpicDragon/HappyEpicDragon.git master:HappyEpicDragon

cd -

git init

git add -A

git commit -m 'backup'

git push -f git@github.com:HappyEpicDragon/HappyEpicDragon.git master:BlogBackUp
