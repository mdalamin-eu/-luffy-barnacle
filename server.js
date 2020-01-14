const express = require('express');
const connectDB = require('./config/db');
const  app = express();
// connection database
connectDB();
app.get('/', (req,res) => res.send('Server running'));
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));