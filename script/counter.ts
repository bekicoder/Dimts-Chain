import pkg from "hardhat";
const { ethers }  = pkg
async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  console.log("Successfully deployed to: ",await counter.getAddress())
}
main().catch(console.error)
