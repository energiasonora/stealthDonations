# Stealth Donations
built in hackquest 
https://www.hackquest.io/es/projects/stealthDonations

# Presentation
[![Watch the presentation video](https://img.youtube.com/vi/l6I0RvU-Is4/0.jpg)](https://www.youtube.com/watch?v=l6I0RvU-Is4)

# Demo
[![Watch the demo](https://img.youtube.com/vi/xM-VxRU9VZY/0.jpg)](https://www.youtube.com/watch?v=xM-VxRU9VZY)
<!-- [![Video Title](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=l6I0RvU-Is4) -->


# DEMO LINKS
Donation page: https://stealthdonations.web.app/?tokenId=1

Metamask stealth address creation: https://stealthdonations.web.app/metamask.html

stealth address test with Alice and Bob example: https://stealthdonations.web.app/stealth.html
 
## Why Stealth Donations?

Traditional crowdfunding platforms often compromise user privacy, expose sensitive information, and are vulnerable to censorship or shutdowns. With Stealth Donations , we eliminate these risks by leveraging stealth addresses —a cutting-edge cryptographic mechanism that ensures donations are sent and received privately, without revealing identities or transaction details.

### Key Features
Anonymous Crowdfunding : Create campaigns for individuals, groups, or multisig wallets without exposing personal data.

Stealth Addresses : Every donation is routed through unique, one-time addresses, ensuring complete privacy for both donors and recipients.

Censorship Resistance : No intermediaries or central authorities can block or interfere with transactions.

Decentralized and Trustless : Fully powered by smart contracts on the Ethereum blockchain, ensuring transparency and security.

Flexible Use Cases : Support causes ranging from personal emergencies to collective initiatives, all while maintaining privacy.

## How It Works

Create a Campaign : Specify an Ethereum address (individual, group, or multisig) and share the campaign link securely.

Donate Anonymously : Donors contribute via stealth addresses, ensuring their identity and transaction details remain private.

Receive Funds Directly : Funds are sent directly to the recipient's (stealth/proxy) wallet, bypassing intermediaries and preserving trust.

## Who Is It For?

- Activists and Journalists : Raise funds securely without fear of retaliation or exposure.
- Charitable Causes : Support underserved communities while maintaining donor anonymity.
- Individuals in Need : Crowdfund for personal emergencies without compromising privacy.
- Decentralized Organizations : Enable trustless fundraising for DAOs, multisigs, and community-driven projects.

# how do stealth addresses work?
Stealth addresses are a privacy-enhancing mechanism. The idea is that Alice can send funds to Bob without revealing Bob's actual public key or address on-chain. Instead, Alice generates an stealth address for Bob, which only Bob can recognize and spend from using his private key.

The process relies on Elliptic Curve Diffie-Hellman (ECDH) to derive a shared secret between Alice and Bob. This shared secret is then used to compute a unique stealth address for the transaction.
 
 
### Procedure for Creating Stealth Addresses Between Alice and Bob

To create stealth addresses between Alice and Bob, we need both private and public keys. Here’s the procedure:

1. **Shared Secret**:  
   Compute the shared secret (`s`) as:  
   $ s = a \cdot B $  
   Where:  
   - `a` is Alice’s private key.  
   - `B` is Bob’s public key.  

   Bob can compute the same shared secret using his private key (`b`) and Alice’s public key (`A`):  
   $ s = b \cdot A $

2. **Hashed Shared Secret**:  
   Hash the shared secret to get the hashed shared secret (`hs`):  
   $ hs = \text{hash}(s) $

3. **Stealth Public Key**:  
   Derive the stealth public key (`stPk`) as:  
   $ \text{stPk} = hs \cdot G + B $  
   Where:  
   - `G` is the generator point of the elliptic curve.  
   - `B` is Bob’s public key.  

4. **Stealth Address**:  
   Finally, generate the stealth address (`stAddr`) from the stealth public key:  
   $ \text{stAddr} = \text{Addr}(\text{stPk}) $

#### Definitions:
- `s`: Shared secret  
- `hs`: Hashed shared secret  
- `G`: Generator point of the elliptic curve  
- Lowercase letters (e.g., `a`): Private keys  
- Uppercase letters (e.g., `B`): Public keys  
- `stPk`: Stealth public key  
- `stAddr`: Stealth address  



# metamask and stealth addresses
MetaMask does not expose the user's private key directly. Instead, MetaMask provides functionality to sign messages or transactions using the private key internally, without revealing it. This creates a challenge when trying to generate stealth addresses , as the process typically requires access to the private key to compute the shared secret.

We can work around this limitation by leveraging message signing and public-key cryptography.

To derive a shared secret (s), we don't need the private key directly. Instead, we can use the public key of the sender (Alice) and the recipient (Bob) to compute the shared secret.

The recipient (Bob) can still recognize the stealth address because he knows his private key and can recompute the shared secret.

## 1. Sender (Alice) Workflow
Alice wants to send funds to Bob using a stealth address. She doesn't need her private key explicitly but uses MetaMask to sign a message to prove ownership of her public key.

Steps:

- Alice retrieves her public key (A) from MetaMask (e.g., by signing a message and recovering the public key).
- Alice obtains Bob's public key (B) (e.g., from Bob's standard Ethereum address or a pre-shared public key).
- Alice computes the shared secret (s) as:
```
s=hash(a⋅B)
```

However, since Alice cannot access a (her private key), she instead uses a message signing approach :
Alice signs a message containing Bob's public key (B).

The signature indirectly proves ownership of her private key without revealing it.
Alice hashes the signature to derive a deterministic value (hs):
```
hs=hash(signature)
```

Alice computes the stealth public key (stPk) as:
```
stPk=hs⋅G+B
```

Alice derives the stealth address (stAddr) from stPk using the standard address derivation process

## 2. Recipient (Bob) Workflow
Bob needs to recognize and spend from the stealth address. Since Bob has access to his private key (b), he can recompute the shared secret and derive the stealth address.

Steps:

- Bob retrieves Alice's public key (A) (e.g., from the signed message or transaction data).
- Bob computes the shared secret (s) as:
```
s=b⋅A
```
- Bob hashes the shared secret to derive hs:
```
hs=hash(s)
```
- Bob computes the same stealth public key (stPk) as:
stPk=hs⋅G+B
- Bob derives the stealth address (stAddr) from stPk.

To spend from the stealth address, Bob computes the corresponding stealth private key (stSk) as:
```
stSk=hs+b
```

# run 
yarn parcel src/index.html  src/stealthMetamask.html --port 4141 --https

# deploy firebase
<!-- yarn parcel src/index.html --dist-dir public  --public-url ./ -->
rm -rf .parcel-cache
yarn parcel src/index.html src/metamask.html src/stealth.html --dist-dir public  --public-url ./
firebase deploy --only hosting:stealthdonations



# git 
https://github.com/energiasonora/stealthDonations

# Summary of Steps
1. Recipient Generates a Stealth (proxy) Address :
    - Create a new Ethereum key pair (private key and public key).
    - Use the public key as the basis for the stealth address.
2. Recipient Signs the Minting Transaction :
    - Sign the transaction payload using the stealth address’s private key.
3. Relayer Submits the Transaction :
    - Use a relayer (via XMTP ) to submit the transaction and sponsor gas.
4. Embed Public Key in NFT Metadata :
    - Store the recipient’s public key in the NFT metadata for donors to use.
5. Donors Derive Unique Stealth Addresses :
    - Donors use the recipient’s public key to derive unique stealth addresses for sending donations.
<!-- 
# Key Takeaways
- The recipient generates their own key pair and uses it to create the stealth address.
- Meta-transactions allow the stealth address to mint the NFT without exposing the recipient’s primary wallet or funding source.
- The recipient’s public key is shared securely (via NFT metadata ) for donors to derive unique stealth addresses. -->

<!-- # how Alice generates her own stealth (proxy) address?
let alicewallet = await aliceWallet()
const alicePrivateKeyA = alicewallet.privateKey;
let alicePrivateKey = ethers.getBytes(alicePrivateKeyA);
let alicePublicKey = getPublicKey(alicePrivateKey);
let stealthAddress = await generateStealthAddress(alicePrivateKey, alicePublicKey)
console.log('stealthAddress: ', stealthAddress.stealthAddress) -->