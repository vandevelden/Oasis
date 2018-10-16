Software tools required:

## Ganache-cli

`which ganache-cli`

If not found:

`npm install ganache-cli`

`ganache-cli`

Expected output:

Ganache CLI v6.1.3 (ganache-core: 2.1.2)


..

## Truffle

`which truffle`

if not found:

`npm install -g truffle`

`truffle`

expected output:

Truffle v4.1.14 - a development framework for Ethereum

Usage: truffle <command> [options]

## Deploy Oasis Contracts
run 

`nohup ganache-cli > /tmp/ganache.out 2>&1 &`

` cd contracts`

`truffle migrate --network local_ganache --compile-all --reset`

expected output:
...

Replacing OasisToken...
  ... 0x75e978d40e8da412d6e35a277da2998042a1331edb4d1762d64c4ae81e9407cc
  OasisToken: 0x7d2e8564c6f68ff19a661a6cbc1449269b5e2f76
Saving successful migration to network...
  ... 0xbf7188453325501b11a45bc239714ad1078178465a106b50b88b052865a60e65
Saving artifacts...


