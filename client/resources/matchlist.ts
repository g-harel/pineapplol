import {query} from "..";

export interface Matchlist {
    lane: string;
    gameId: number;
    champion: number;
    platformId: string;
    timestamp: number;
    queue: number;
    role: string;
    season: number;
}

export const matchlist = async ({
    accountId,
}: {
    accountId: number;
}): Promise<Matchlist> => {
    if (accountId === undefined) {
        throw new Error("[accountId] must be provided");
    }
    const list = await query(
        "/lol/match/v3/matchlists/by-account/" + accountId,
        {
            beginIndex: 0,
            endIndex: 1,
        },
    );
    if (list.matches.length < 1) {
        throw new Error("account has no matches");
    }
    return list.matches[0];
};
