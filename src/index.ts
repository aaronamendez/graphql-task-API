import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import schema from './Schemas'
dotenv.config()

const server: Application = express()
const port: string = process.env.PORT || '4001'

server.get('/', (_, res: Response): void => {
  res.json({ message: 'hi there! 👋' })
})

server.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

server.listen(port, (): void => console.log('Server Running ...'))
