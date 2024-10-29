from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding, rsa
from cryptography.hazmat.primitives.serialization import load_pem_public_key
import base64

# Your RSA public key (in PEM format)
public_key_pem = b"""
-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAn1dYyLLK4Y1wI9Y9bnjSb+rX/t1K6sUDwi/dEndgYd6U9sX3/Z22
VnlI1EJGHOaWkql1kUU3w7KObA0ttZ1ETcJM8pHx+t+g6vEKWPlM0di+BU0wfLus
H+wUTqu8Ym05RbAjL0KUQyJ1WXcR4BTQ6LkDrXYA4MzYIzYameNK2rA7hj400fVb
iHPza1E153TM8SkVJclJH6nWJ1Ewe+ORfrlLaAxHdSu+LB4kj+JNMzNJSqBT5i9Q
conFXk0FAz3Rf4euN4tacfstIRVhOTgCElVQRLHG2lx1HMe3vFxomL4qsDtFgwuS
TxmQ74SP233TXpQ4dMCbnW6K8GyepdKb8wIDAQAB
-----END RSA PUBLIC KEY-----
"""

# Load the public key
public_key = load_pem_public_key(public_key_pem)

# The base64 encoded signature
signature_base64 = (
    "XDTOJb6D6Atz6TTaWdrL03mQv7QoVerMWwahagMUqnjB/xph3/Wie6Z67+4ctVkrR2Xg/CSAbj0tE83z+h/CdWvlk7neD9ntUc/XprMcyI3fwyspMs6mI93C0vDVlnglv+"
    "jBo1VcdMyZC8aUAvVjJz2knzz0usQQLh7pECLbiGKnRJ8iM62pdb81sngpTxp1etHV35JD5pzjrhQQY54/qJnC5pMXoq412cRB8OquWhRivilwr3haHwvFk+EY3zXqGxNx"
    "XC5/EdBSh/n2peltIdulEtq3QU36XZ6SaoofBBYsWKLJPN2Xk5R+NZ8QOM+TwUa9RRMcz8241WpnMypm2A=="
)

# Decode the base64 signature
signature = base64.b64decode(signature_base64)

# Define the message you suspect matches the signature
message = b"Your original message goes here"

# Verify the signature
try:
    public_key.verify(
        signature,
        message,
        padding.PKCS1v15(),
        hashes.SHA256()
    )
    print("Signature is valid for the given message.")
except Exception as e:
    print("Signature verification failed:", e)
