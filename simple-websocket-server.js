const http = require('http');
const WebSocketServer = require('websocket').server
let connection = null;

const httpServer = http.createServer((req,res) =>{
  console.log("We have received the request");
});
const websocket = new WebSocketServer(
  {
    'httpServer' : httpServer
  }
);

websocket.on('request', request => {
    connection = request.accept(null,request.origin);
    connection.on('open', () => {
      console.log("Opened....");
      
    })
    connection.on('close', () => console.log("Closed...."))
    connection.on('message', message => {
      console.log(`Received the message : ${message.utf8Data}`);
    });
    setInterval(() => sendSignalEvery5Second(),1000);
})


httpServer.listen(8080, () => console.log("My Server is listing on port 8080"));

function sendSignalEvery5Second(){
  const random = Math.random();
  console.log(`Sending : ${random}`)
  connection.send(`Message : ${random}`)
}
