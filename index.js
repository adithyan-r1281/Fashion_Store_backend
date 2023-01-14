const express=require('express')

const cors=require('cors')



const app=express();


app.listen(3000,()=>{
    console.log('Express server listening to port 3000');
})


app.use(express.json());

app.use(cors({
    origin:'http://localhost:4200'
}))

const dataService=require('./services/dataService')

app.get('/all-fashions',(req,res)=>{
    dataService.getAllFashion()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//api to wishlist

app.post('/addtowishlist',(req,res)=>{
    console.log(req.body);
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api to get wishlist

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})


app.delete('/deletewish/:id',(req,res)=>{
    dataService.deleteitem(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})