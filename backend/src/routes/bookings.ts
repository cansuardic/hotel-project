import {PrismaClient} from "@prisma/client";
import express, {Request, Response} from "express";

const prisma = new PrismaClient();
const router = express.Router();

router.post(
  "/property/:propertyId/book",
  async (req: Request, res: Response) => {
    const propertyId = parseInt(req.params.propertyId, 10);
    const {
      userId,
      checkInDate,
      checkOutDate,
    }: {userId: number; checkInDate: Date; checkOutDate: Date} = req.body;

    try {
      const property = await prisma.property.findUnique({
        where: {property_id: propertyId},
      });
      if (!property) {
        return res.status(404).json({error: "Property not found"});
      }

      const payment = await prisma.payment.findFirst({
        where: {
          property_id: propertyId,
          user_id: userId,
        },
      });
      if (!payment) {
        return res
          .status(400)
          .json({error: "Payment not found for the property"});
      }

      const booking = await prisma.booking.create({
        data: {
          user_id: userId,
          property_id: propertyId,
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
        },
        select: {
          booking_id: true,
          property_id: true,
          check_in_date: true,
          check_out_date: true,
        },
      });

      res.json(booking);
    } catch (err) {
      console.error("Error booking property:", err);
      res.status(500).send("Error booking property");
    }
  }
);

router.get("/:userId", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    const bookings = await prisma.booking.findMany({
      where: {user_id: userId},
      include: {
        property: {
          select: {
            property_name: true,
          },
        },
      },
      orderBy: {
        check_in_date: "desc",
      },
    });

    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).send("Error fetching bookings");
  }
});

export default router;
