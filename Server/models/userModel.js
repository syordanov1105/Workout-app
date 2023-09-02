import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

//signup
userSchema.statics.signup = async function(email, password){

    if(!email || !password){
        throw Error("Please fill all the fields!");
    }
    if(!validator.isEmail(email)){
        throw Error("Not a valid email!");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Too weak password!");
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email exists!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});

    return user;
}

//login
userSchema.statics.login = async function(email, password){

    if(!email || !password){
        throw Error("Please fill all the fields!");
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error("Wrong email!");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Wrong password!");
    }

    return user;
}

export default mongoose.model("User", userSchema);