import 'dotenv/config'
import { app } from './src/app.js'
import { createWebSocketServer } from './src/websockets.js'

const port = process.env.APP_PORT || 3000

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

createWebSocketServer(server)
