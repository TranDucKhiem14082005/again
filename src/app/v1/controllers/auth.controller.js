const authService = require("../services/auth.service");

class authController{
    register(req, res) {
        const { username, password } = req.body;
        const result = authService.register(req.body.username, req.body.password);
        
        if(result.success === false) {
            return res.status(result.status).json({
                message: result.message,
            });
        }
        
        return res.status(201).json({
            message: "User created successfully",
            data: result,
        })
    }
}

module.exports = new authController();