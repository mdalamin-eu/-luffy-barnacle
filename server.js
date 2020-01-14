const express = require('express');
const connectDB = require('./config/db');
const  app = express();
// connection database
connectDB();

app.get('/', (req,res) => res.send('Server running'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));