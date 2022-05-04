
/*\
 *
 * This is where we declare the structure of the data we're storing in the database.
 * 
\*/
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    password: String,
    inventory: [String],
});

const User = mongoose.model('User', userSchema);
export default User;