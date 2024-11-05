import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath = path.join();
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        filePath = path.join(__dirname, "public", "404.html");
      }
      const data = await fs.readFile(filePath);
      console.log(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
