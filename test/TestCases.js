// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Greeter", function () {


//   let owner,
//   account1,
//   account2,
//   account3,
//   account4,
//   account5,
//   account6,
//   account7,
//   account8;
  
//   it("Should set all the accounts", async function () {
//     [owner, account1, account2, account3, account4, account5, account6, account7, account8, account9,_] = await ethers.getSigners();
  
// });

// it("Should deploy the NFT Contract", async function () {
//   const BabyDogeNft = await ethers.getContractFactory("BabyDogeNFT");
//   babyDogeNft = await BabyDogeNft.deploy("BabyDogeNFT","BDNFT","https://base", "105");
//   await babyDogeNft.deployed();
//   console.log("babyDogeNFT Address", babyDogeNft.address);
//   expect(babyDogeNft.address).to.not.equal("");
// });

//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
