import express, {Request, Response} from "express";
import prisma from "../../prisma/client";

const router = express.Router();

async function registerUser(
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  password: string,
  birth_date: string
): Promise<boolean> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {email},
    });

    if (existingUser) {
      return false;
    }

    await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        phone_number,
        password,
        birth_date: new Date(birth_date),
      },
    });

    return true;
  } catch (error) {
    console.error("Error during registration:", error);
    return false;
  }
}

async function loginUser(email: string, password: string): Promise<any> {
  try {
    const user = await prisma.user.findUnique({
      where: {email},
    });

    if (!user || user.password !== password) {
      return false;
    }

    return user;
  } catch (error) {
    console.error("Error during login:", error);
    return false;
  }
}

router.post("/register", async (req: Request, res: Response) => {
  const {first_name, last_name, email, phone_number, password, birth_date} =
    req.body;

  const success = await registerUser(
    first_name,
    last_name,
    email,
    phone_number,
    password,
    birth_date
  );

  if (success) {
    res.json({message: "Registration successful"});
  } else {
    res.status(500).json({message: "Registration error"});
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const userData = await loginUser(email, password);

  if (userData) {
    res.json({message: "Login successful", user: userData});
  } else {
    res.status(401).json({message: "Login failed"});
  }
});

export default router;
