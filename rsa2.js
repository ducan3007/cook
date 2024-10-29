const RSA = require('encrypt-rsa').default;
const rsa = new RSA();

const { publicKey, privateKey } = rsa.createPrivateAndPublicKeys();
