const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send({
        "Data" : "Just a normal text line"
    })
})

app.listen(port,()=>{
    console.log(`Server Up and Running on ${port}`);
})