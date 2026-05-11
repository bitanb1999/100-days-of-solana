import {
  createSolanaRpc,
  devnet,
} from "@solana/kit";

const LAMPORTS_PER_SOL = 1_000_000_000;

const rpc = createSolanaRpc(
  devnet("https://api.devnet.solana.com")
);

const WALLET = "91uG2WNeUKUujZX3S1N35h9g7gX7KCiT9kGwvQZryMz1";

try {
  const signatures = await rpc
    .getSignaturesForAddress(WALLET, { limit: 1 })
    .send();

  if (!Array.isArray(signatures) || signatures.length === 0) {
    console.log("No transactions found.");
    process.exit(0);
  }

  const signature = signatures[0].signature;
  console.log("Latest Signature:", signature);

  const tx = await rpc
    .getTransaction(signature, {
      encoding: "jsonParsed",
      maxSupportedTransactionVersion: 0,
    })
    .send();

  if (!tx) {
    console.log("Transaction not found.");
    process.exit(0);
  }

  let sender = null;
  let receiver = null;
  let amount = null;

  const instructions = tx.transaction.message.instructions;

  for (const ix of instructions) {
    if (
      ix.program === "system" &&
      ix.parsed &&
      ix.parsed.type === "transfer"
    ) {
      sender = ix.parsed.info.source;
      receiver = ix.parsed.info.destination;

      // ✅ FIX: convert BigInt → Number
      amount =
        Number(ix.parsed.info.lamports) / LAMPORTS_PER_SOL;
    }
  }

  // ✅ FIX: fee also BigInt
  const fee = Number(tx.meta.fee) / LAMPORTS_PER_SOL;

  console.log("\n--- Transaction Details ---");
  console.log("Sender   :", sender);
  console.log("Receiver :", receiver);
  console.log("Amount   :", amount, "SOL");
  console.log("Fee      :", fee, "SOL");

  console.log(
    `Explorer: https://explorer.solana.com/tx/${signature}?cluster=devnet`
  );

} catch (error) {
  console.error("Error fetching transaction:", error);
}