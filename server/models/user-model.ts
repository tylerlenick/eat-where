const User = new Schema(
    {
        name: {type:String, required:true}
    }
)
module.exports = mongoose.model('users', User)