pushd Angular_Frontend
npm run ng serve --pc proxy-config.json &
frontend = $!
popd
pushd Node_Backend
npm run nodemon server.js &
backend = $!
popd
wait $frontend
wait $backend