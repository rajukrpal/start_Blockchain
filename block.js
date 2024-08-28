const { Genesis_Data } = require("./config");
const { cryptoHash } = require("./crypto-hash");

class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new this(Genesis_Data);
  }
  static mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    return new this({
      timestamp,
      prevHash,
      data,
      hash: cryptoHash(timestamp, prevHash, data),
    });
  }
}

const Bolck1 = new Block({
  timestamp: "2/09/2024",
  prevHash: "0xabc",
  hash: "0xc12",
  data: "Hello",
});
const Bolck2 = new Block({
  timestamp: "6/09/2025",
  prevHash: "0xc12",
  hash: "0xc12dh5",
  data: "Raju Kumar Pal",
});
// console.log("🚀 ~ Bolck1:", Bolck1);
// console.log("🚀 ~ Bolck2:", Bolck2);

const genesisBlock = Block.genesis();
//  console.log("🚀 ~ genesisBlock:", genesisBlock)

const result = Block.mineBlock({ prevBlock: Bolck1, data: "Bolck2" });
console.log("🚀 ~ result:", result);
