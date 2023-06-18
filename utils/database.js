import mongoose from 'mongoose';

let isConnected = false ;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    
    try{
        await mongoose.connect('mongodb+srv://shivamkd20:w3RL3ezXKCbjCQj0@cluster0.xygfr7n.mongodb.net/?retryWrites=true&w=majority'
        , {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected')
    }catch(error){
        console.log(error);
    }
}