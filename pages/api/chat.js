import {Server} from 'socket.io'


export default async function handler (req, res) {

  let usersOnline = [];

  const io = new Server(res.socket.server);
  res.socket.server.io = io

  io.on("connection", (socket) => {

    usersOnline.push(socket.id);

    io.emit('updateUsers', usersOnline);

    // Remove user from the list of users when they disconnect
    socket.on('disconnectionUser', () => {
      usersOnline = usersOnline.filter((id) => id !== socket.id).pop();
    });

    // Receive a message from the client
    socket.on("sendMessage", (obj) => {
      io.emit("receiveMessage", obj)
    });
  });

  res.end()

}
