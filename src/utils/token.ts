import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Secret key for signing and verifying JWT (make sure to store this securely)
const SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
}
/**
 * Interface for the payload to include in the token.
 */
export interface UserPayload {
  id: string;
  username: string;
  role: string;
}

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
}
/**
 * Interface for the payload to include in the token.
 */
export interface UserPayload {
  id: string;
  username: string;
  role: string;
}

/**
 * Generate a JWT token with the given payload.
 * @param payload - The payload to include in the token (e.g., user details, role, etc.).
 * @param expiresIn - Token expiration time (default: 1 hour).
 * @returns A signed JWT token as a string.
 */
//example: const token = generateToken({ id: user.id, username: user.username, role: user.role });
export const generateToken = (payload: UserPayload, expiresIn = "1h"): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verify the JWT token and decode its contents.
 * @param token - The JWT token to verify.
 * @returns The decoded token payload (or null if verification fails).
 */
export const verifyToken = (token: string): string | JwtPayload | null => {
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
