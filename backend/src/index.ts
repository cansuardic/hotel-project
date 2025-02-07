import express from "express";

import auth from "./auth/index";
import bookingsRouter from "./routes/bookings";
import citiesRouter from "./routes/cities";
import favoritesRouter from "./routes/favorites";
import paymentRouter from "./routes/payment";
import propertiesRouter from "./routes/properties";
import categoriesRouter from "./routes/categories";
import prisma from "../prisma/client";

const cors = require("cors");

const app = express();
const port = 3200;

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello from MyBnb!");
});

app.get("/db", async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error " + err);
  }
});

app.use("/auth", auth);
app.use("/properties", propertiesRouter);
app.use("/favorites", favoritesRouter);
app.use("/bookings", bookingsRouter);
app.use("/payment", paymentRouter);
app.use("/cities", citiesRouter);
app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
