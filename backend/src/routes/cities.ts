import {Router, Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const cities = await prisma.city.findMany({
      orderBy: {city_name: "asc"},
    });
    res.json(cities);
  } catch (err) {
    console.error("Error fetching cities:", err);
    res.status(500).send("Error fetching cities");
  }
});

router.get("/:cityId/districts", async (req: Request, res: Response) => {
  const cityId = parseInt(req.params.cityId, 10);

  try {
    const districts = await prisma.district.findMany({
      where: {city_id: cityId},
      orderBy: {district_name: "asc"},
    });

    res.json(districts);
  } catch (err) {
    console.error(`Error fetching districts for city ${cityId}:`, err);
    res.status(500).send(`Error fetching districts for city ${cityId}`);
  }
});

export default router;
