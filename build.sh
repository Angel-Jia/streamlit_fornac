set -ex
export NODE_OPTIONS="--openssl-legacy-provider"
export BROWSER=none
(cd streamlit-forna/frontend && npm i --legacy-peer-deps && npm run build)
