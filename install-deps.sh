pushd Angular_Frontend
npm install && echo frontend deps installed || echo frontend deps failed to install
popd
pushd Node_Backend
npm install && echo backend deps installed || echo backend deps failed to install
popd