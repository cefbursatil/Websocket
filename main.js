const express = require("express")
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require('socket.io')

const app = express();


const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

httpServer.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
})

io.on('connection', (socket) => {
    // We execute one time when the server detects a new connection
    // Client
    let now = new Date().toLocaleTimeString();
    console.log("--------------------------")
    console.log(`[${now}] Open New connection`)
    
    // Each message we execute event carlos
    socket.on("carlos", data => {
        console.log(data);
        io.sockets.emit("carlos", data)
    })

})