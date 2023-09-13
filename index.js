const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({"message": "Welcome to the API"});
});

app.listen(3000 , () => console.log("App is running on http://localhost:3000"));