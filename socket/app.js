import { Server } from 'socket.io';

const io = new Server({
    cors: {
        origin: "http://localhost:5173",
    },
});

let onLineUsers = []

const addUser = (userId, socketId) => {
    const userExists = onLineUsers.find(user => user.userId === userId);
    if (!userExists) {
        onLineUsers.push({ userId, socketId });
    }
};

const removeUser = (socketId) => {
    onLineUsers = onLineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return onLineUsers.find(user => user.userId === userId);
};

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id)
    });

    socket.on("sendMessage", ({ receiverId, data }) => {
        const receiver = getUser(receiverId);
        io.to(receiver.socketId).emit("getMessage", data);
    });

    socket.on("disconnect", () => {
        removeUser(socket.id);
    })
});

io.listen("4000")