const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://avinvmavolil:avinvmavolil@cluster0.jsi71d7.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})