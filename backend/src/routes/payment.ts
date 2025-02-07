import {Router, Request, Response} from "express";
import prisma from "../../prisma/client";

const router = Router();

router.post(
  "/property/:propertyId/pay",
  async (req: Request, res: Response) => {
    const propertyId = parseInt(req.params.propertyId, 10);
    const {userId, amount} = req.body;

    try {
      const property = await prisma.property.findUnique({
        where: {property_id: propertyId},
      });

      if (!property) {
        return res.status(404).json({error: "Property not found"});
      }

      const payment = await prisma.payment.create({
        data: {
          user_id: userId,
          property_id: propertyId,
          amount: amount,
        },
      });

      res.json({
        payment_id: payment.payment_id,
        property_id: propertyId,
        amount: amount,
      });
    } catch (err) {
      console.error("Error making payment:", err);
      res.status(500).send("Error making payment");
    }
  }
);

export default router;
