import https from 'https'
import express from 'express'
import fs from 'fs'
import 'env.ts'

const app = express();


const server = https.createServer({
    key: fs.readFileSync('path/to/server.key'),
    cert: fs.readFileSync('path/to/server.cert')
}, app);