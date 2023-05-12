import { userRepo } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { TLoginRequest } from "../../interfaces/login.interface";
import { User } from "../../entities";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const user: User | null = await userRepo.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ admin: user.admin }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};

export default createTokenService;
