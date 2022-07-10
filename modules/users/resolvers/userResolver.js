import { getUserById, registerUser } from '../services/userService.js';

export const userQueryResolver = {
  async user(_, { id }) {
    const userData = await getUserById(id);
    return userData;
  },
};

export const userMutationsResolver = {
  async register(_, {
    firstName,
    lastName,
    password,
    email,
    favouriteArtistIds,
  }) {
    let registeredUser = null;

    try {
      const { data } = await registerUser({
        firstName,
        lastName,
        password,
        email,
        favouriteArtistIds,
      });

      registeredUser = data;
      registeredUser.id = data._id;
      delete registeredUser._id;
    } catch (error) {
      console.log(error);
    }

    return registeredUser;
  },
};
