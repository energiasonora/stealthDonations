# Stealth Donations
built in hackquest 
https://www.hackquest.io/es/projects/stealthDonations

# DEMO
https://stealthdonations.web.app/?tokenId=1
https://stealthdonations.web.app/metamask.html

## Description
### Empowering Privacy and Freedom in Crowdfunding

In a world where financial freedom and privacy are increasingly under threat, Stealth Donations offers a revolutionary solution for anonymous, censorship-resistant crowdfunding. Built on the Ethereum blockchain, this decentralized application (dApp) enables individuals and groups to create fundraising campaigns while preserving the anonymity of both donors and recipients.

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

Receive Funds Directly : Funds are sent directly to the recipient's wallet, bypassing intermediaries and preserving trust.

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


<!-- ### Procedure for Creating Stealth Addresses Between Alice and Bob

To create stealth addresses between Alice and Bob, we require both private and public keys. Below is the step-by-step procedure:

#### Definitions:
- **s**: Shared secret  
- **hs**: Hashed shared secret  
- **G**: Generator point of the elliptic curve  
- Lowercase letters (e.g., `a`): Private keys  
- Uppercase letters (e.g., `B`): Public keys  
- **stPk**: Stealth public key  
- **stAddr**: Stealth address  

#### Step 1: Generate the Shared Secret
The shared secret (`s`) is computed as follows:
$$ s = a \cdot B $$
Where:
- `a` is Alice's private key.
- `B` is Bob's public key.

Alice computes the shared secret by multiplying her private key (`a`) with Bob's public key (`B`). The result is the same shared secret that Bob would compute if he multiplied his private key (`b`) with Alice's public key (`A`):
$$ s = b \cdot A $$

This symmetry arises from the properties of elliptic curve cryptography.

#### Step 2: Hash the Shared Secret
Next, the shared secret (`s`) is hashed to produce the **hashed shared secret** (`hs`):
$$ hs = \text{hash}(s) $$

Hashing ensures that the shared secret is transformed into a fixed-length value, which enhances security and makes it suitable for further cryptographic operations.

#### Step 3: Compute the Stealth Public Key
The **stealth public key** (`stPk`) is derived by combining the hashed shared secret (`hs`) with the generator point (`G`) of the elliptic curve and Bob's public key (`B`):
$$ \text{stPk} = hs \cdot G + B $$

Here’s what happens in this step:
1. Multiply the hashed shared secret (`hs`) by the generator point (`G`) of the elliptic curve.
2. Add Bob's public key (`B`) to the result.

This computation ensures that the stealth public key is unique to the interaction between Alice and Bob.

#### Step 4: Generate the Stealth Address
Finally, the **stealth address** (`stAddr`) is obtained by encoding the stealth public key (`stPk`) into a usable format:
$$ \text{stAddr} = \text{Addr}(\text{stPk}) $$

The stealth address is the final output that can be used for transactions. It allows Alice to send funds to Bob in a way that maintains privacy, as the address is derived uniquely for this specific interaction.
  -->


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

# debug helpers
yarn list --pattern parcel

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

# Key Takeaways
- The recipient generates their own key pair and uses it to create the stealth address.
- Meta-transactions allow the stealth address to mint the NFT without exposing the recipient’s primary wallet or funding source.
- The recipient’s public key is shared securely (via NFT metadata ) for donors to derive unique stealth addresses.

# how Alice generates her own stealth (proxy) address?
let alicewallet = await aliceWallet()
const alicePrivateKeyA = alicewallet.privateKey;
let alicePrivateKey = ethers.getBytes(alicePrivateKeyA);
let alicePublicKey = getPublicKey(alicePrivateKey);
let stealthAddress = await generateStealthAddress(alicePrivateKey, alicePublicKey)
console.log('stealthAddress: ', stealthAddress.stealthAddress)