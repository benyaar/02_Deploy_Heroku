import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req:Request, res:Response) => {
    let helloWorld = 'Запомни! Есть первое место и остальные! АУФ';
    res.send(helloWorld)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})