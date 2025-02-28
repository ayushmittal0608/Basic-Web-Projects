const path=require("path");
const express=require("express");
const app=express();

app.get('/', (req, res)=>{
    const clock=path.join(__dirname, 'digital-clock.html');
    res.sendFile(clock, (err)=>{
        if(err){
            console.log('Error sending file', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.get('/guess-the-number', (req, res)=>{
    const guess=path.join(__dirname, 'guess-the-number.html');
    res.sendFile(guess, (err)=>{
        if(err){
            console.log('Error sending file', err);
        }
    });
});

app.get('/currency-convertor', (req, res)=>{
    const guess=path.join(__dirname, 'currency-convertor.html');
    res.sendFile(guess, (err)=>{
        if(err){
            console.log('Error sending file', err);
        }
    });
});

app.listen(6754, (req,res)=>{
    console.log("Server is running on port 6754")
});