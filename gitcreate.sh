[11:21] Manokar, Sapna
echo Please Provide same Repo Name as provided before:

read  name

git add .

git status

git commit -m "Generating new folder structure for Microservices"

git remote add origin git@github.com:mpendulo-mtn/$name.git

git push -f origin main

git checkout -b dev

git push -u origin dev

git checkout -b stage

git push -u origin stage

git checkout main

bash
