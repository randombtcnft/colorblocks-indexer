import { getBlockHash, getBlockTxs, getTransactions } from "./mempool/index.js";

export default async function app() {
    // test 
    const blockHash = await getBlockHash("825955")
    const txs = await getBlockTxs(blockHash)
    // txs.map(tx => console.log(tx.vin))
    // console.log(txs.vin)
    await getTransactions();
}