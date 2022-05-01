import express, { Request, Response } from 'express';
const app = express();

app.get('/', (_, res: Response): void => {
	res.json({ message: 'Typescript' });
});

app.listen(3000, (): void => console.log('Server Running ...'));
