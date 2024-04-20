import express, { Request, Response } from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world qweqweqwe!");
});

app.get("/user", (req: Request, res: Response) => {
    res.json({ name: "denis", age: 31 });
});

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
