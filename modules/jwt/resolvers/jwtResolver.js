import { loginUser } from '../services/jwtService.js';

export const jwtQueryResolver = {
  async jwt(_, { password, email }) {
    let jwt = null;

    try {
      const { data } = await loginUser({ password, email });

      jwt = data;
    } catch (error) {
      console.log(error);
    }

    return jwt;
  },
};
