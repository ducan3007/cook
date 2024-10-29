const crypto = require('crypto');

// Generate a 2048-bit RSA key pair
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

const data = 'user_id_12345'; // The message you want to sign

// Create a signer object and specify the hashing algorithm
const signer = crypto.createSign('sha256');
signer.update(data); // Add data to be signed
signer.end(); // Complete the signing process

// Sign the data using the private key, encoding the result as base64
let signature = signer.sign(privateKey, 'base64');

console.log('Signature:', signature);

// Create a verifier object using the same hashing algorithm
const verifier = crypto.createVerify('sha256');
verifier.update(data); // Add the same data
verifier.end(); // Complete the process

// Verify the signature using the public key
const isVerified = verifier.verify(publicKey, signature, 'base64');

console.log('Signature Verified:', isVerified); // Should print true if verification is successful
