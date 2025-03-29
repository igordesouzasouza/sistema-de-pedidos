import { Request, Response, Router } from "express";

const router = Router();

router.get("/api", (req: Request, res: Response) => {
    return res.json({ message: "Hello World" });

//   throw new Error("Server error on port 3000");
});

export { router };
