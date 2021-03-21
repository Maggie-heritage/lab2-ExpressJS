const express=require('express');
const app =express();
const port= 9000;


app.get('/',(req,res)=>res.sendfile('index.html'));

app.listen(port,()=>console.log('The port ${port} is listening to the request !!'));






