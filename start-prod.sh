pushd Node_Backend
npm run nodemon server.js &
backend = $!
popd
wait $backend