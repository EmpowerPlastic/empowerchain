#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

empowerd --home $CHAIN_DIR --node tcp://:$RPC_PORT tx proofofexistence create ipZS+n+DPPkPp+mQRdHJLBlqvQGsevJhXhMHgOT/iO0= --from alice --keyring-backend test --chain-id $CHAIN_ID -b block --yes
empowerd --home $CHAIN_DIR --node tcp://:$RPC_PORT q proofofexistence show-stored-proof ipZS+n+DPPkPp+mQRdHJLBlqvQGsevJhXhMHgOT/iO0=

echo "Tests completed successfully!"

make kill

echo "Serve killed"