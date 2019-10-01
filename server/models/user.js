const bcrypt = require('bcrypt');
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    username : {
        type: String, 
        min: [4, 'Too short max is 4 characters'],
        max: [32, 'Too Long max is 32 characters']
    },
    email: {
        type: String, 
        min: [4, 'Too short max is 4 characters'],
        max: [32, 'Too Long max is 32 characters'],
        unique: true, 
        lowercase: true, 
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String, 
        min: [4, 'Too short max is 4 characters'],
        max: [32, 'Too Long max is 32 characters'],
        required: 'Password is required',
    },
    rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]

});

UserSchema.methods.hasSamePassword = function(RequestPassword) {

    return bcrypt.compareSync(RequestPassword, this.password)
}

UserSchema.pre('save', function(next) {
const user = this;

    bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
           user.password = hash;
           next();
        });
    });
});

module.exports = mongoose.model('User', UserSchema); 