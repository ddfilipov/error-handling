import express, { Request, Response } from 'express';

const app = express();

// Define a GET route
app.get('/user', (req: Request, res: Response) => {
    res.json({ name: "denis", age: 31 });
});

// Set the port for the Express server
const PORT: number | string = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
