import { Request, Response, NextFunction } from "express";

/**
 * Middleware to check if the user has the required role(s).
 * @param roles - An array of roles that are allowed to access the route.
 * @returns A middleware function.
 */
const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if the `user` property exists on the request object
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: No user information found" });
    }

    // Extract the role from the user payload
    const userRole = typeof req.user === "string" ? null : req.user.role;

    if (!userRole) {
      return res.status(403).json({ message: "Forbidden: Role information is missing" });
    }

    // Check if the user's role is in the allowed roles
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden: Insufficient role permissions" });
    }

    // If everything is okay, proceed to the next middleware
    next();
  };
};

export default roleMiddleware;