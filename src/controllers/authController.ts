import { Request, Response } from "express";
import authService from "../services/authService";
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
    const token = generateToken({ id: id.toString(), username, role });

    // cookie configuration
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    // Envía la respuesta al cliente
    return res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default login;