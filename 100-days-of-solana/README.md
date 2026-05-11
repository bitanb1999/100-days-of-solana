# 100 Days of Solana

A learning journey through Solana blockchain development, starting from basics like wallet creation to more advanced interactions.

## Project Structure

### Day 1: Create Wallet
- **File**: `day-01/create-wallet.mjs`
- Creates a new Solana wallet and saves the keypair

### Day 2: Persistent Wallet
- **File**: `day-02/persistent-wallet.mjs`
- Loads and manages a persistent wallet from stored keypair

### Day 3: Lamport Conversion
- **File**: `day-03/lamport-conversion.mjs`
- Converts between SOL and Lamports (smallest unit of SOL)

### Day 4: Web Interface
- **File**: `day-04/day-4-wallet/`
- A simple web application interface for wallet operations
- Uses Vite for build tooling
- Includes counter demonstration

### Day 8: Fetch Transactions
- **File**: `day-08/fetch_interaction.mjs`
- Fetches and displays recent transactions for a given Solana address
- Includes error handling and transaction details (signature, slot, timestamp, status)

## Installation

```bash
npm install
```

## Running the Scripts

Each day has its own script that can be run with Node.js:

```bash
# Day 1: Create wallet
node day-01/create-wallet.mjs

# Day 2: Persistent wallet
node day-02/persistent-wallet.mjs

# Day 3: Lamport conversion
node day-03/lamport-conversion.mjs

# Day 8: Fetch transactions
node day-08/fetch_interaction.mjs
```

## Day 4 Web Interface

Navigate to the day-4-wallet directory and start the development server:

```bash
cd day-04/day-4-wallet
npm install
npm run dev
```

## Configuration

- Network: Devnet (https://api.devnet.solana.com)
- Uses `@solana/kit` for RPC interactions

## Files

- `wallet.json` - Stored wallet keypair
- `package.json` - Project dependencies
- Each day folder contains day-specific scripts and resources

## Requirements

- Node.js 16+
- npm or yarn

## Learning Progress

Track progress through each day's implementation as you build up from basic wallet operations to fetching transaction data and building web interfaces.
