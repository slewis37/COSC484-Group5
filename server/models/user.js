import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    password: String,
    inventory: [
        {
            name: {type: String, required: true},
            quantity: {
                amount: {type: Number, required: true},
                unit: {type: String, required: true},
            },
        }
    ],
});

const User = mongoose.Model('User', userSchema);
export default User;