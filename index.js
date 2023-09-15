const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routes/liara');
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"message": "Welcome to the API"});
});

app.use('/api/v1', router);

app.listen(PORT , () => console.log(`App is running on http://localhost:${PORT}`));