const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join("")); // helloworld
  return hash.digest("hex");
};

// const result = cryptoHash("hello", "world");
const result = cryptoHash( "world","hello");
// console.log("🚀 ~ result:", result);

module.exports={cryptoHash}
