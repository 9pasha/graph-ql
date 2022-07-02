import {getUsers} from "../services/userService.js";

export const userResolver = {
    async users() {
        const usersData = await getUsers();
        return JSON.parse(usersData);
    }
}