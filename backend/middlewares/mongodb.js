const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/ictakLearnerTracker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
})