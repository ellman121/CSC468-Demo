pushd Angular_Frontend
npm run build-prod
popd

rm -f Node_Backend/angular-static/*
cp -r Angular_Frontend/dist/* Node_Backend/angular-static/