import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, world qweqweqwe!");
});

app.get("/user", (req: Request, res: Response) => {
    res.json({
        companyName: "Patterson",
        employees: [{ name: "Pere", age: 30 }],
    });
});

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
