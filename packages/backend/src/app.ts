import express, { NextFunction, Request, Response } from "express";
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
    console.log("inside uncontrolled-error in backend");

    // res.json(immutableData);
    throw new Error("❗Uncontrolled error from the backend!");
    // res.status(500).json({ error: "Esto es un error que viene del back" });
});

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// middleware that catches all errors and removes the err.stack, we just want to show the message
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

const shouldThrowError: boolean = false;
