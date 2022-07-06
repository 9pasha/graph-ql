import { getUsers, registerUser } from '../services/userService.js';

export const userQueryResolver = {
  async users() {
    const usersData = await getUsers();
    return usersData;
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
