pushd Angular_Frontend
npm run ng build --target=production --aot
popd
cp -r Angular_Frontend/dist Node_Backend/angular-static