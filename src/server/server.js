const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('./src/server/db.json')

server.use(cors({
  origin: 'http://localhost:4000',
  methods: ['GET', 'POST'],
  credentials: true,
}));

server.use(router)
server.listen(4001, () => {
  console.log('JSON Server is running http://localhost:4001')
});