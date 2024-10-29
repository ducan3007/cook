const crypto = require('crypto');

// Define the public key
const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAoDnxT58Fc2QA9Nof7vpzmnwQ0zNCk5kbgaC/E2uxpNegCnlwuyVj
xSUDoT7C3+93IjV5dj4dcASee4Lp0J7IFYm75QDdvtIGYFctGQ7NcR2PhlZGvG/g
JJgA8mylDDjzEpF4xQ7QoUpLnjhia82gCqXk/th8mdug8ro0avZiV8R59PQTQgWE
Ysp8lsVCc1MbMJq+N3iQyJi8+LDYLluBqhBP1SBoVqVw/iaAFFdbjvFwjKTbjKsu
RhOiJrtaLaa8gDx1Xq3BQAKKpmYM/bR781LUBLQWHHE3ghNjMd8fdzZsi24APKlB
LQvfQsOZ3GV98ay3izvrH2rTky6wKHuBuQIDAQAB
-----END RSA PUBLIC KEY-----`;

// Message to be encrypted
const message = 'user_id_12345';

// Function to encrypt the message using the public key
function encryptWithPublicKey(publicKey, message) {
  const buffer = Buffer.from(message, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}

function decryptWithPublicKey(publicKey, encryptedMessage) {
  const buffer = Buffer.from(encryptedMessage, 'base64');
  const decrypted = crypto.publicDecrypt(publicKey, buffer);
  return decrypted.toString('utf8');
}

// Encrypting the message
const encryptedMessage = encryptWithPublicKey(publicKey, message);
console.log('Encrypted Message:', encryptedMessage);

const decryptedMessage = decryptWithPublicKey(publicKey, encryptedMessage);
console.log('Decrypted Message:', decryptedMessage);
