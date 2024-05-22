import express, { Request, Response } from "express";
import cors from "cors";
import { immutableData } from "./data/data";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/user", (req: Request, res: Response) => {
    if (shouldThrowError) {
        throw new Error("ERORRR!");
        // res.status(500).json({ error: "Esto es un error que viene del back" });
    }

    res.json(immutableData);
});

app.get("/uncontrolled-error", (req: Request, res: Response) => {
    throw new Error("Uncontrolled error from the backend!");
    // res.status(500).json({ error: "Esto es un error que viene del back" });
});

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const shouldThrowError: boolean = false;
