const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth.route.js');
const postRoute = require('./routes/post.route.js');
const testRoute = require('./routes/test.route.js');

const userRoute = require('./routes/user.route.js');

const chatRoute = require('./routes/chat.route.js');
const messageRoute = require('./routes/message.route.js');

const app = express();
const PORT = 8800;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.use('/api/posts', postRoute);
app.use('/api/test', testRoute);

app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

app.get('/api', (req, res) => {
    res.send(`✅✅✅ Server is running on port ${PORT}!`);
})

app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}! Hurrah!!`));
