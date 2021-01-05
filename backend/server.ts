import { handleAuthorization } from './authz';
import { handleAuthentication } from './auth';
import * as jsonServer from 'json-server'
import { Express } from 'express'

import * as fs from 'fs';
import * as https from 'https';

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

const porta: number = 3001


https.createServer(options, server).listen(porta, () => {
  console.log(`JSON Server pronto em https://localhost:${porta}`)
})