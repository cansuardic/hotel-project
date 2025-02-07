import express, {Request, Response} from "express";
import prisma from "../../prisma/client";
const router = express.Router();

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

router.get("/:userId", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    const favorites = await prisma.favorite.findMany({
      where: {user_id: userId},
      include: {
        property: {
          select: {
            property_id: true,
            property_name: true,
            room_count: true,
            bed_count: true,
            price: true,
            description: true,
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
        },
      },
    });

    const formattedFavorites = favorites.map((fav) => ({
      property_name: fav.property?.property_name ?? null,
      room_count: fav.property?.room_count ?? null,
      bed_count: fav.property?.bed_count ?? null,
      price: fav.property?.price ?? null,
      description: fav.property?.description ?? null,
      city_name: fav.property?.city?.city_name ?? null,
      district_name: fav.property?.district?.district_name ?? null,
      category_name: fav.property?.category?.category_name ?? null,
      type_name: fav.property?.property_type?.type_name ?? null,
      comments:
        fav?.property?.property_comments?.map((comment: any) => ({
          user_name:
            comment?.user?.first_name && comment?.user?.last_name
              ? `${comment.user.first_name} ${comment.user.last_name}`
              : null,
          ...comment,
        })) ?? null,
      ...fav,
    }));

    res.json(formattedFavorites);
  } catch (err) {
    console.error("Error fetching favorites:", err);
    res.status(500).send("Error fetching favorites");
  }
});

router.post("/add", async (req, res) => {
  const {userId, propertyId} = req.body;

  try {
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        user_id: userId,
        property_id: propertyId,
      },
    });

    if (existingFavorite) {
      return res.status(400).json({error: "Property already in favorites"});
    }

    const newFavorite = await prisma.favorite.create({
      data: {
        user_id: userId,
        property_id: propertyId,
      },
    });

    res.status(201).json(newFavorite);
  } catch (err) {
    console.error("Error adding favorite:", err);
    res.status(500).send("Error adding favorite");
  }
});

router.delete("/remove", async (req, res) => {
  const {userId, propertyId} = req.body;

  try {
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        user_id: userId,
        property_id: propertyId,
      },
    });

    if (!existingFavorite) {
      return res.status(404).json({error: "Favorite not found"});
    }

    const deletedFavorite = await prisma.favorite.delete({
      where: {
        favorite_id: existingFavorite.favorite_id,
      },
    });

    res.json(deletedFavorite);
  } catch (err) {
    console.error("Error removing favorite:", err);
    res.status(500).send("Error removing favorite");
  }
});

export default router;
