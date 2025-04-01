
// --------..............-----------
// TEST FUNCTIONS

    // -----------------------------------------
            // WALLET FUNCTIONS
            // -----------------------------------------
    
    
            // Function to derive an address on demand
            async function deriveAddressWallet(mnemonic, index) {
                const basePath = "m/44'/60'/0'/0/";
                const path = `${basePath}${index}`;
                const derivedNode = ethers.HDNodeWallet.fromPhrase(mnemonic, path);
                return derivedNode
            }
    
            async function aliceWallet() {
                let aliceMnemonic = localStorage.getItem('aliceMnemonic');
                if (!aliceMnemonic) {
                    console.error('NO aliceMnemonic  in localStorage!');
    
                    const randmnemonic = await ethers.HDNodeWallet.createRandom()
                    aliceMnemonic = randmnemonic.mnemonic.phrase;
                    localStorage.setItem('aliceMnemonic', aliceMnemonic);
    
                } else {
                    console.log('aliceMnemonic is in localStorage!');
    
                }
                let aliceWall = deriveAddressWallet(aliceMnemonic, 0)
                return aliceWall
            }
    

            
            async function selftest2(){
                const msg = 'noble cryptography';
                 msgHash = sha256(utf8ToBytes(msg));
                 priv = secp.utils.randomPrivateKey();
                 sfsig = secp.sign(msgHash, priv);
                 pub = sfsig.recoverPublicKey(msgHash);
            }

        async function selftest(){

// Mensaje original
const mensaje = "Hola, blockchain!";
const mensajeHash = ethers.hashMessage(mensaje);

// Crear una billetera aleatoria y firmar el mensaje
// const signer = ethers.Wallet.createRandom();
let signer = await aliceWallet()

const firma = await signer.signMessage(mensaje);
console.log('firma:' , firma)

pub = firma.recoverPublicKey(mensajeHash);
console.log('pub:', pub)
// recoverPublicKey(msgHash);

// Decodificar la firma en r, s y v
const firmaBytes = ethers.Signature.from(firma);
const r = firmaBytes.r;
const s = firmaBytes.s;
const v = firmaBytes.v;

// Convertir valores a Uint8Array
const mensajeHashBytes = ethers.getBytes(mensajeHash);
const rBytes = ethers.getBytes(r);
const sBytes = ethers.getBytes(s);

// Concatenar r y s correctamente
const signatureBytes = new Uint8Array([...rBytes, ...sBytes]);

// Recuperar la clave pública
const publicKey = secp.Signature.fromCompact(signatureBytes).recoverPublicKey(mensajeHashBytes, v - 27);

// Convertir clave pública a hexadecimal
const publicKeyHex = "0x" + publicKey.toHex();

console.log("Dirección original:", signer.address);
console.log("Clave pública recuperada:", publicKeyHex);
console.log("Dirección derivada de la clave pública:", ethers.computeAddress(publicKeyHex));

// // Mensaje original
// const mensaje = "Hola, blockchain!";
// const mensajeHash = ethers.hashMessage(mensaje);

// // Crear una billetera aleatoria y firmar el mensaje
// const signer = ethers.Wallet.createRandom();
// const firma = await signer.signMessage(mensaje);

// // Decodificar la firma en r, s y v
// const firmaBytes = ethers.Signature.from(firma);
// const { r, s, v } = firmaBytes;

// // Recuperar la clave pública completa
// const publicKey = secp.Signature.fromCompact(Uint8Array.from(r)).recoverPublicKey(Uint8Array.from(mensajeHash), v === 27);

// // Formatear la clave pública en hexadecimal
// const publicKeyHex = "0x" + publicKey.toHex();

// console.log("Dirección original:", signer.address);
// console.log("Clave pública recuperada:", publicKeyHex);
// console.log("Dirección derivada de la clave pública:", ethers.computeAddress(publicKeyHex));

        }