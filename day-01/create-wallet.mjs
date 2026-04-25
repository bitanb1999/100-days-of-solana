import { generateKeyPairSigner,
	createSolanaRpc,
	devnet, } from "@solana/kit";
const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
// Generate a brand new keypair
// const wallet = await generateKeyPairSigner();
//console.log("Your new wallet address:", wallet.address);
console.log(
  "\nThis address is your public key. It's safe to share."
);
const { value: balance } = await rpc.getBalance("edSQ1W2P228wXAuNTALJTfartmNYUET1xg1e5kSujMa").send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);

console.log(
  "The private key stays in memory. In a real app, you'd save it securely."
); 
