class authService {
    register(username,password) {
        if(!username || !password) {
            return {
                success: false,
                messagee: "Username and password are required",
                status: 400
            }
        }
        return {username, password};
    }
}

module.exports = new authService();