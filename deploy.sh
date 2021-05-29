echo "[DEPLOY.SH] Pulling all new changes"
git pull
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Building new image"
export IMAGE_TAG=$(date +"%Y_%m_%d-%H_%M")
docker build -t bankless:$IMAGE_TAG .
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Deleting old container & running new one"
docker rm -f bankless_prod
docker run --detach --restart=always --env-file .env -p 3000:3000 --name bankless_prod bankless:$IMAGE_TAG
echo "[DEPLOY.SH] DONE"

echo " "
echo "[DEPLOY.SH] DEPLOYMENT HAS BEEN SUCCESSFULLY DONE"