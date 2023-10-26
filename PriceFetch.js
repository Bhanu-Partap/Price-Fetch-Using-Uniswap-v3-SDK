const {ethers} = require("ethers")
const Quoter = require('@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json')

const Provider= new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/vcTD-zoE41OoKyny7NQmsTzsO2wpwFUh")

const main = async()=>{
    const addressFrom = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" //WETH
    const addressTo = "0x6B175474E89094C44Da98b954EedeAC495271d0F" //DAI

    const humanValue ="1";
    const result = await fetchPrice(addressFrom, addressTo, humanValue);
}