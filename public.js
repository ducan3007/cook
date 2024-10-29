const crypto = require('crypto');

// Your RSA private key (PEM format)
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQEAoDnxT58Fc2QA9Nof7vpzmnwQ0zNCk5kbgaC/E2uxpNegCnlw
uyVjxSUDoT7C3+93IjV5dj4dcASee4Lp0J7IFYm75QDdvtIGYFctGQ7NcR2PhlZG
vG/gJJgA8mylDDjzEpF4xQ7QoUpLnjhia82gCqXk/th8mdug8ro0avZiV8R59PQT
QgWEYsp8lsVCc1MbMJq+N3iQyJi8+LDYLluBqhBP1SBoVqVw/iaAFFdbjvFwjKTb
jKsuRhOiJrtaLaa8gDx1Xq3BQAKKpmYM/bR781LUBLQWHHE3ghNjMd8fdzZsi24A
PKlBLQvfQsOZ3GV98ay3izvrH2rTky6wKHuBuQIDAQABAoH/XLOfpVPv3T+SiSuD
E0FKoVvX6gtSDWJDQu3bn2q5jk2B3rTuUwoduTdYia1tnF2+6GSR1/U/nME2yRfD
9L6uLD4X9/ql2xoyqe1QDNbIkCmUEeBi0aOaFUM/SQN/P4k9aE+a6N6L6nbgmBaR
KeHYNscThXK7kOayuDMXSC32VakUXj5b3CSYHY+wn5BXwgNmhSi8zJsgzABvc1IH
h55Hd0H5nsrCClUDbsITKGfJLXBZqMidl8UlnI0UdFtv2+uEc0xn4l+M1ByohdfR
eERFSwTH00w7GdiC3l+fXaSxHlAylf0J6JissDmJhk5rR50CmHp9hXow2xwOuiaY
DbY3AoGBANKIoNpx+O/X0tcYvHmEQlAt2OM5oXt+BJopPV1ADfxqkio3NUWlvysJ
ZF5QNxIX3s036kwj4H3iaiWhuvdEkqdMHO01VA4xK5ofePZYsuhr4Oxq4y2Qq5B6
B5dkWa1zDsf0WLIK1JUO+opB5eQl0iYhVFDsX2Q6c3mfwZkrznv3AoGBAMLUEVm9
KrTvegKjjbrADLrupRdbgoSbhZM85OxmGof2CgxvDnIFXjyGNFM8nX4anWR5ZEOj
9CeWG4+nrYuNdJ7Vg22ncFkqab3ntpY0HZzMi6MAQOPeRQbJF8bvbhQ7MDQ4XYyY
K4vIfMRAnw22QPF6aUUu56kV578C0i1NYaPPAoGAIRkHqK/oQdR9OgGSh8wKHM7I
XRiPUXnDQXUgR4utZzRd3DMntdZT0nE8jTMxJTAJf9u9gtDVFxVEOLxPR1ZJc/Gc
TpJmr4B9aVJvUtMo9S8YgjJfmqc2wZTdoqhNDN6cwUShuQPI3dIoAxpPCOoFOqdc
uQggCwLBaqp55hmj8YsCgYEAqsmQNCR5jYboY+vP0EeOYUfV/PXBIlHa9ElLPFf9
JfZutJueBCHkjBXxRI48WVEna+5mEE1nOFSD8JhCr7Te6GWvAq7m86MUct7u1hj1
ZICCX+9W8unjhKE/cKpuytlf1kca6qZydeTYSomDZFfB8m0mXvlRJo4HSxBEAmZ1
E00CgYAg31Ly+opYjheqLCtxMKSqw1x6ewerePXS1bP7+O78A/abfjuUHHQe4Fcr
WKC2c5r6vQfTwDFTmxhUNfI+/mnlYdeBogzKjkh39HizX4GvP9ou7Oq26RqsK+z9
xLEhzJk05E8j2nqx3y36jyMhrv2aGj+R8OhpxY7INcteq+ZTHg==
-----END RSA PRIVATE KEY-----`;

// Your RSA public key (PEM format)
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

// Encrypt the message with the private key (signing the message)
function encryptWithPrivateKey(privateKey, message) {
  const buffer = Buffer.from(message, 'utf8');
  const encrypted = crypto.privateEncrypt(privateKey, buffer);
  return encrypted.toString('base64');
}

// Decrypt the message with the public key (verifying the message)
function decryptWithPublicKey(publicKey, encryptedMessage) {
  const buffer = Buffer.from(encryptedMessage, 'base64');
  const decrypted = crypto.publicDecrypt(publicKey, buffer);
  return decrypted.toString('utf8');
}

// Encrypting the message
const encryptedMessage = encryptWithPrivateKey(privateKey, message);
console.log('Encrypted Message:', encryptedMessage);

// Decrypting the message
const decryptedMessage = decryptWithPublicKey(publicKey, encryptedMessage);
console.log('Decrypted Message:', decryptedMessage);
