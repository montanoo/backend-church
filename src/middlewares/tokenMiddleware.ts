// placeholder for folders to be created.
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/token";
import { JwtPayload } from "jsonwebtoken";
import { UserPayload } from "../utils/token";

// Extend the Request type to include a `user` property
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & UserPayload; 
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Extract the token from cookies
  const token = req.cookies?.token;

  if (!token) {
    return res.status(403).json({ message: "Token is required" });
  }

  try {
    // Verify the token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === "string") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Ensure the token contains a role
    if (!decoded.role) {
      return res.status(403).json({ message: "Access denied: Role missing in token" });
    }
      // Attach the decoded payload to the request object
      req.user = decoded as JwtPayload & UserPayload;
      // Call the next middleware
      next();
    } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authMiddleware;