import { Request, Response } from "express";
import authService from "../services/auth.service";
import { generateToken } from "../utils/token";

const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    // Finds user by email
    const user = await authService.findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Verifies password
    const isPasswordValid = await authService.verifyPassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { id, username, role } = user;
    // Generates token
    const token = generateToken({ id: id.toString(), username, role, email });

    const response = {
      token,
      id,
      username,
      role,
      email,
    };

    // cookie configuration
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    // Envía la respuesta al cliente
    return res.status(200).json({
      message: "Login successful",
      user: response,
    });
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const logout = (req: Request, res: Response): Response => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({ message: "Logout successful" });
};

export default { login, logout };
