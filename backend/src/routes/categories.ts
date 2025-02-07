import {Router, Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    if (!categories) {
      return res.status(404).json({error: "Categories not found"});
    }
    return res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Error fetching categories");
  }
});

export default router;
