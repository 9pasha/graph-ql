import {getTracks} from "../services/tracksService.js";

export const trackResolver = {
    async tracks() {
        const { data } = await getTracks();

        return data.items;
    }
};
