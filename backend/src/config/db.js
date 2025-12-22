import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodbAPI);

    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export default connectDB;