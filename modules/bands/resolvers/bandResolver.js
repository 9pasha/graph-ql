import {getBands} from "../services/bandService.js";

export const bandResolver = {
    async bands() {
        const { data } = await getBands();

        return data.items;
    }
}