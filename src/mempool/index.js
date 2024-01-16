import mempoolJS from "@mempool/mempool.js";

const { bitcoin: { blocks } } = mempoolJS({
    hostname: 'mempool.space'
});


export async function getBlockHash(blackHeight) {
    const blackHash = await blocks.getBlockHeight({ height: blackHeight });
    console.log(blackHash);
    return blackHash
}


export async function getBlockTxs(blackHash) {

      const blockTxs = await blocks.getBlockTxs({ hash: blackHash, start_index:300 });
      console.log(blockTxs.length);
    //   return blockTxs;
}

export async function getTransactions() {
    // e69bf6368bb5045e8456c10ad6a2c33106305a300a92c14ec587a25a0690add8
    const { bitcoin: { transactions } } = mempoolJS({
        hostname: 'mempool.space'
      });
    
      const txid = 'e69bf6368bb5045e8456c10ad6a2c33106305a300a92c14ec587a25a0690add8';
      const tx = await transactions.getTx({ txid });
    //   console.log(tx);
    //   console.log(tx.vin);
}