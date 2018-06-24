import {query} from "..";

export interface Match {
    gameId: number;
    platformId: string;
    gameCreation: number;
    gameDuration: number;
    queueId: number;
    mapId: number;
    seasonId: number;
    gameVersion: string;
    gameMode: string;
    gameType: string;
    teams: {}[];
    participants: {}[];
    participantIdentities: {}[];
}

export const match = async ({gameId}: {gameId: number}) => {
    if (gameId === undefined) {
        throw new Error("[gameId] must be provided");
    }
    return query("/lol/match/v3/matches/" + gameId);
};
