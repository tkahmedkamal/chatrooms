const StaticServer = require("static-server");

var server = new StaticServer({
  rootPath: "./build/",
  port: 8000
});

server.start(function() {
  console.log("Server listening to", server.port);
});
