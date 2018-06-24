import dotenv from "dotenv";
dotenv.load();

import request, {Options} from "request-promise-native";

export const query = async (path: string, query?: any) => {
    if (!process.env.API_KEY) {
        throw new Error("empty `API_KEY` environment variable");
    }

    const res = await request({
        url: "https://na1.api.riotgames.com" + path,
        headers: {
            "X-Riot-Token": process.env.API_KEY,
        },
        qs: query,
    } as Options);

    try {
        return JSON.parse(res);
    } catch (e) {
        return res;
    }
};
