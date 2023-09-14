const express = require('express');
const app = express();
const router = require('./routes/liara');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"message": "Welcome to the API"});
});

app.use('/api/v1', router);

app.listen(3000 , () => console.log("App is running on http://localhost:3000"));