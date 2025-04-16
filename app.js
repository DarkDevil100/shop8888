const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get("/" , (req, res) => {
    res.send("Welcome to Shop8888! from Vinothraja")
})

app.listen(PORT, () => {
    console.log(`Server is Up & Running on port ${PORT}`);
})