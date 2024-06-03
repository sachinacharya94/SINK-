const User = require('../Models/User')

exports.addUser = async( req, res)=>{
    let { username, email, password} = req.body
    try {
        
        let newUser = await User.create({
            username,
            email,
            password
        })
        if(!newUser){
            return res.status(400).json({error:"Something went wrong"})
        }
        res.send(newUser)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}