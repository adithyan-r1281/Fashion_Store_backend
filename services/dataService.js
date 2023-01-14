const db=require('./db')


const getAllFashion=()=>{
   return db.Fashion.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    Fashions:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Product Not Found!'
                }
            }
        }
    )
}


//add to wish list
const addtowishlist=(id,title,price,description,image)=>{
    
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product Already in your wishlist!'
                }
            }
            else{
                const newFashion=new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image
                })
                newFashion.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product added to your wish list!'
                }
            }
        }
    )

}


//get wishlist

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    fashions:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your wishlist is empty!'
                }
            }
        }
    )
}

const deleteitem=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"item deleted "
                }
            }
            else{
                return{
                    status:false,
                    statusCode:401,
                    message:'cannot delete'
                }
            }
        }
    )
}
module.exports={
    getAllFashion,addtowishlist,getwishlist,deleteitem
}