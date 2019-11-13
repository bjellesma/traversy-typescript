import express from 'express';
//the colon syntax helps to ensure type checking
const app: express.Application = express();

// for this add variable, we're saying that our params should be number types as well as the return type
const add = (a: number, b: number): number => {
    return a+b
}

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(add(5,5))
    res.send('Hello')
})

app.listen(5000, () => {
    console.log('Server Running')
})