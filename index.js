const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var DB = {

    games: [
        {
            id: 1,
            title: "Call of Duty 3",
            year: 2015,
            price: 48

        },
        {
            id: 2,
            title: "Empire Age 2",
            year: 2003,
            price: 20


        },
        {
            id: 3,
            title: "Minecraft",
            year: 2014,
            price: 10


        },
        {
            id: 4,
            title: "Quake 3",
            year: 2005,
            price: 101


        },






    ]

}

app.get("/",()=>{
    

})

app.listen(8080,()=>{
        console.log("API RODANDO!")
})