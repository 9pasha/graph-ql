import {createBand, deleteBand, getBandById, getBands, updateBand} from "../services/bandService.js";

export const bandQueryResolver = {
    async bands() {
        const { data } = await getBands();

        return data.items;
    },

    async band(_, { id }) {
        let band = null;

        try {
            const { data } = await getBandById(id);

            band = data;
            band.id = band._id;
            delete band._id;
        } catch (error) {
            console.log(error);
        }

        return band;
    }
};

export const bandMutationResolver = {
    async createBand(_, { name, origin, members, website, genres }, context) {
        let createdBand = null;

        try {
            const { data } = await createBand(
                {
                    name,
                    origin,
                    members,
                    website,
                    genres
                },
                context.token
            );

            createdBand = data;
            createdBand.id = createdBand._id;
            delete createdBand._id;
        } catch (error) {
            console.log(error);
        }

        return createdBand;
    },

    async deleteBand(_, { id }, context) {
        let deletedItem = null;

        try {
            const { data } = await deleteBand(id, context.token);

            deletedItem = data;
        } catch (error) {
            console.log(error);
        }

        return deletedItem;
    },

    async updateBand(_,
         {
            currentId,
            name,
            origin,
            members,
            website,
            genres
         },
            context
    ) {
        let updatedBand = null;

        try {
            const { data } = await updateBand(
                currentId,
                {
                    name,
                    origin,
                    members,
                    website,
                    genres
                },
                context.token
            );

            updatedBand = data;
            updatedBand.id = updatedBand._id;
            delete updatedBand._id;
        } catch (error) {
            console.log(error);
        }

        return updatedBand;
    }
};