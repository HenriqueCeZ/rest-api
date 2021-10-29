const express = require('express');
const app = express();
const cors = require('cors'); 


app.use(cors());



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

app.get("/games",(req, res)=>{ // endpoint get é responsável por retornar dados
    res.statusCode = 200 ; // status code 200: requisição feita com sucesso  
    res.json(DB.games)
    

})

app.get("/games/:id",(req, res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400) //not validator

    }else{
        var id  = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id)

        if(game != undefined){
            res.statusCode = 200 // success
            res.json(game);
        }else{
            res.sendStatus(404) // Not found
        }
    }
    
    

})


app.post("/game",(req, res) =>{ // cadastros de game
        var{ title, price, year} = req.body;
        if( title != null &&  price != null &&  year != null ){
            DB.games.push({ 
                id: 2303,
                title,
                price,
                year
                
            })
            res.sendStatus(200);
        }else{
            res.sendStatus(400)
        }



})

app.delete("/game/:id",(req,res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400) //not validator

    }else{
        var id  = parseInt(req.params.id)
        var index = DB.games.findIndex(g => g.id == id)
        if(index == -1){
            res.sendStatus(404)
        }else{
            DB.games.splice(index, 1)//deletando o game pelo index  
            res.sendStatus(200)
        }
     
    }
    

})


app.put("/game/:id",(req,res)=>{ // update
    if(isNaN(req.params.id)){
        res.sendStatus(400) //not validator

    }else{
        var id  = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id)

        if(game != undefined){
            
            var{ title, price, year} = req.body;
            if( title != undefined){
                game.title = title;

            }
            if( price != undefined){
                if(isNaN(price)){
                    res.sendStatus(400)
                }else{
                game.price = price;
                }
            }
            if( year != undefined){
             if(isNaN(year)){
                res.sendStatus(400)
             }else{
                game.year= year;
             }
            }
         res.sendStatus(200)   


        }else{
            res.sendStatus(404) // Not found
        }
    }
    

})
app.listen(8080,()=>{
        console.log("API RODANDO!")
})