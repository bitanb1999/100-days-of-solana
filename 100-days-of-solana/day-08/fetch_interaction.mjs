import { createSolanaRpc, devnet, address } from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

// Same address from yesterday. Programs have lots of transaction activity.
const targetAddress = address(
  "HCP6wWtisCW9QUuGZ1xTE5X2cesjH5rSzUe7F1tVRjj5"
);

// Fetch the 5 most recent transaction signatures for this address
try {
  console.log("Fetching transaction signatures...");
  const signatures = await rpc
    .getSignaturesForAddress(targetAddress, { limit: 5 })
    .send();

  console.log(`Found ${signatures.length} transactions`);
  console.log(
    `\nLast 5 transactions for ${targetAddress}:\n`
  );

  for (const tx of signatures) {
    const time = tx.blockTime
      ? new Date(Number(tx.blockTime) * 1000).toLocaleString()
      : "unknown";

    console.log(`Signature : ${tx.signature}`);
    console.log(`Slot      : ${tx.slot}`);
    console.log(`Time      : ${time}`);
    console.log(`Status    : ${tx.err ? "Failed" : "Success"}`);
    console.log("---");
  }
} catch (error) {
  console.error("Error fetching transactions:", error.message);
}