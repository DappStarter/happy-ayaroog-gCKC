require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stock royal magic evil hunt define army gaze'; 
let testAccounts = [
"0x00adbe39688d40800e84a9c06797e0ec60259a27547b14d0618105df0eb64980",
"0xc31d3eb874135360c479beac853954a0de6f845617f18dfa4328d112740311a5",
"0x9a0d398fc5cd6cac0f134039f876b4a34b83ad435d54433fe880ee5eebf2b436",
"0xac5ee9d1cee704d0d29cb6bc5b68a7606d2f7936b45c4b181d12bd09865e0566",
"0xabb53c4886b7e11f2f7d8da700468e151e45f798e1df0d6a693b470efdf79826",
"0xa99d7427be56af862f8a7680bdc50b088318e4d9b305e9db536ced008b13392b",
"0x692c2bf0c68a38affe4bfd0e4a9a6668cbf9cbc6038e113939d00c325508b096",
"0xd0a1b795176e623ede82ac8fbb0136d93715f3036b0dfe7bccfa55165ff9e178",
"0x1b16becc7957b4897a5d9f4b6f66e6e8f0e685ca91aeec5edf33a389dc793c8f",
"0xc9f4805fc90ba2b9cf8d4aaa3a05aa1c81ba120209f86d6f65c796ac45e2ea34"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

