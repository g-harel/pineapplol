import {match, matchlist, summoner} from "./client/resources";

const ence = require("ence");

const start = async (): Promise<any> => {
    const {accountId} = await summoner({name: "PineappleBombs"});
    const {gameId} = await matchlist({accountId});
    const mch = await match({gameId});
    console.log(ence(mch));
    console.log(JSON.stringify(mch, null, 2));
};

start().catch((e) => console.error(e.stack || e.toString()));
