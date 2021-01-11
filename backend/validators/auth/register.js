const {body} = require ("express-validator")

exports.rules=(()=>{
    return [
        body('firstname').notEmpty(),
        body('lastName').notEmpty(),
        body('gender').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({min:5}) 
    ]
})()