import {query} from "..";

export interface Summoner {
    id: number;
    accountId: number;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
}

export const summoner = async ({
    id,
    accountId,
    name,
}: {
    id?: number;
    accountId?: number;
    name?: string;
}): Promise<Summoner> => {
    if (id) {
        return query(" /lol/summoner/v3/summoners/" + id);
    }
    if (accountId) {
        return query("/lol/summoner/v3/summoners/by-account/" + accountId);
    }
    if (name) {
        return query("/lol/summoner/v3/summoners/by-name/" + name);
    }
    throw new Error("one of [id, accountId, name] must be provided");
};
