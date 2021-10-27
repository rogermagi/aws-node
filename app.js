const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send("Fantastic - Application deployed to AWS");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("WhatsApp");
});