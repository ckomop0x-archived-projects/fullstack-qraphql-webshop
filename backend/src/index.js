require("dotenv").config({ path: "./variables.env" });
const createServer = require("./createServer");
const db = require("./db");

// TODO: Use express middleware to handle cookies (JWT)

// TODO: Use express middleware to populdate current user
const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(
      `⚡️ Server is now running on http://localhost:${deets.port} 🚀`
    );
  }
);
