const express=require('express');
const cors=require('cors');
const app=new express();
const PORT=8000;
const movieModel=require('./model/productData');
require('./connection');
app.use(cors());
app.use(express.json())

app.get('/products',async(req,res)=>{      //api endpoint -> /products
    console.log('inside')       
    try{
        const data=await movieModel.find();
        res.send(data)
    }catch(error)
    {
        console.log(error)
    }
})

app.post('/newproduct',async(req,res)=>{      //api endpoint -> /newproduct
    console.log('inside')       
    try{
        var item=req.body;
        const datasave = new movieModel(item);
        const saveddata = await datasave.save();
        res.send('Post successful');
    }catch(error)
    {
        console.log(error)
    }
})

//delete a document

// app.delete('/movieremoval/:id',async(req,res)=>{      //api endpoint -> /movieremoval:id
//     console.log('inside')       
//     try{
//         await movieModel.findByIdAndDelete(req.params.id);
//         res.send('Deleted successfully');
//     }catch(error)
//     {
//         console.log(error)
//     }
// })

app.listen(PORT,()=>{
    console.log('Server is running on PORT 8000')
})