const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("./src/data/db.json");
const middlewares = jsonServer.defaults();


// Allow CORS for all routes and origins
server.use(cors()); 
server.use(middlewares);
server.use(router);

server.listen(5001, () => {
  console.log("JSON Server is running on port 5001");
});
