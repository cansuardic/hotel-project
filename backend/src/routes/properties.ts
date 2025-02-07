import {PrismaClient, Property} from "@prisma/client";
import express, {Request, Response, Router} from "express";

const prisma = new PrismaClient();
const router: Router = express.Router();

const propertyDataFormatter = (properties: any) => {
  return properties.map((property: any) => ({
    city_name: property?.city?.city_name ?? null,
    district_name: property?.district?.district_name ?? null,
    category_name: property?.category?.category_name ?? null,
    type_name: property?.property_type?.type_name ?? null,
    comments:
      property?.property_comments?.map((comment: any) => ({
        user_name:
          comment?.user?.first_name && comment?.user?.last_name
            ? `${comment.user.first_name} ${comment.user.last_name}`
            : null,
        ...comment,
      })) ?? null,
    ...property,
  }));
};

router.get("/", async (req: Request, res: Response) => {
  try {
    const properties = await prisma.property.findMany({
      include: {
        city: {select: {city_name: true}},
        district: {select: {district_name: true}},
        category: {select: {category_name: true}},
        property_type: {select: {type_name: true}},
        property_comments: {
          include: {
            user: {select: {first_name: true, last_name: true}},
          },
        },
      },
      orderBy: {
        property_id: "asc",
      },
    });

    res.json(propertyDataFormatter(properties));
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).send("Error fetching properties");
  }
});

router.get("/:propertyId", async (req: Request, res: Response) => {
  const propertyId = parseInt(req.params.propertyId);

  try {
    const property = await prisma.property.findUnique({
      where: {property_id: propertyId},
      include: {
        city: true,
        district: true,
        category: true,
        property_type: true,
        property_photos: true,
      },
    });

    if (!property) {
      return res.status(404).json({error: "Property not found"});
    }

    res.json(property);
  } catch (err) {
    console.error(
      `Error fetching property details for propertyId ${propertyId}:`,
      err
    );
    res
      .status(500)
      .send(`Error fetching property details for propertyId ${propertyId}`);
  }
});

router.get("/category/:categoryId", async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.categoryId);

  try {
    const properties = await prisma.property.findMany({
      where: {category_id: categoryId},
      include: {
        city: {select: {city_name: true}},
        district: {select: {district_name: true}},
        category: {select: {category_name: true}},
        property_type: {select: {type_name: true}},
        property_comments: {
          include: {
            user: {select: {first_name: true, last_name: true}},
          },
        },
      },
    });

    res.json(propertyDataFormatter(properties));
  } catch (err) {
    console.error(`Error fetching properties for category ${categoryId}:`, err);
    res
      .status(500)
      .send(`Error fetching properties for category ${categoryId}`);
  }
});

router.get(
  "/category/:categoryId/city/:cityId",
  async (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.categoryId);
    const cityId = parseInt(req.params.cityId);

    try {
      const properties = await prisma.property.findMany({
        where: {
          category_id: categoryId,
          city_id: cityId,
        },
        include: {
          city: true,
          district: true,
          category: true,
          property_type: true,
        },
        orderBy: {
          property_id: "asc",
        },
      });

      res.json(properties);
    } catch (err) {
      console.error(
        `Error fetching properties for category ${categoryId} and city ${cityId}:`,
        err
      );
      res
        .status(500)
        .send(
          `Error fetching properties for category ${categoryId} and city ${cityId}`
        );
    }
  }
);

router.post("/:propertyId/comment", async (req: Request, res: Response) => {
  const property_id = parseInt(req.params.propertyId, 10);
  const {
    user_id,
    comment_text,
    rating,
  }: {user_id: number; comment_text: string; rating: number} = req.body;

  try {
    if (!property_id || !user_id || !comment_text || !rating) {
      return res.status(400).json({error: "Bad request."});
    }

    const newComment = await prisma.propertyComment.create({
      data: {
        property_id,
        user_id,
        comment_text,
        rating,
        created_at: new Date(),
      },
    });

    res.status(201).json(newComment);
  } catch (err) {
    console.error("Error happened when adding comment:", err);
    res.status(500).json({error: "Server Error"});
  }
});

export default router;
