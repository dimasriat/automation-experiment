import dotenv from "dotenv";

dotenv.config();

const SECRET_MESSAGE = process.env.SECRET_MESSAGE ?? "";

export default {
  SECRET_MESSAGE,
};
