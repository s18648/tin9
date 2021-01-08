const express = require('express');
const cors = require('cors');
const calculator = require("./routes/calculator");



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use("/", calculator);

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
} );
