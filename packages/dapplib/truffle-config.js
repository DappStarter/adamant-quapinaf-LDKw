require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth shift promote idea enter obscure snake'; 
let testAccounts = [
"0x584547f9e34bca079545d93cb9918f669af640323785db28e98ec3667f62c020",
"0x37ff16b027febfec70c35d61b7e69730ac7ef02d7c524c9b27ea423d375f0bd8",
"0x9c0026c540cfd353267f2cbf5ed9bea83d018ad33e990af8da0c8165f66086ce",
"0x121642e40359c595e9e90ef61bd8f7965bb4b1d46d66d6aec64ea29ea22bbfa7",
"0x0431215b5aa9976549326d030aa21ab58fdfbc1144611faa6556e7bd0612aa68",
"0xfa1e4686a311af0da4af0afc29aef99f8a14b67e69be7e27d303504c7f3f4025",
"0xcab6c6362e8a73fe0e215e75e36b5f163fe87c0b7cd525ce751568a796b9e721",
"0x9e7cd0e4eff3accb49e93fd7e1db9dad975436affa29af76e49fee5799b2ff00",
"0xb4b4efb070540f3d771848b0911ac9528acf6c674cb2332049510478cae70b11",
"0x211148aa18d449af93cef0b48670a0c4198baafda7aac882d0bc04e75401fc83"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


