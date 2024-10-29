import http from "http";
const PORT = 5000;
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
  res.writeHead(201, { "Content-Type": "application/json" });
  // res.write("Hello World!");
  res.end(
    JSON.stringify({
      message: `Everything is up and running on port ${PORT}`
    })
  );
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
