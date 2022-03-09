const socketController = (socket) => {
  socket.on("enviar-mensaje", async (payload, callback) => {
    const id = socket.id;
    callback(id);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = socketController;
