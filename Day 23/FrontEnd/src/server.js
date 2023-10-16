const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json({ extended: false }));

app.listen(port, () => console.log(`server started on port ${port}`));