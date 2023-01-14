const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/store',()=>{
    console.log('connected to mongodb');
})

const Fashion= mongoose.model('Fashion',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

  //create a model
  const Wishlist=mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String
})

module.exports={
    Fashion,Wishlist
}