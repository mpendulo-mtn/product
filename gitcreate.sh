[11:21] Manokar, Sapna
echo Please Provide same Repo Name as provided before:

read  name

git config user.name mpendulo-mtn

git init

git add .

git status

git commit -m "Generating new folder structure for Microservices"

git remote add origin https://github.com/mpendulo-mtn/$name.git

git push -f origin master

git checkout -b dev

git push -u origin dev

git checkout -b stage

git push -u origin stage

git checkout master

bash
