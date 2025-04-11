const users = require("../../../data/dummy/auth.dummy");

class authModel {
  createUser(username, password) {
    // Simulate user creation
    return users.push({ username, password });
    
  }
}

module.exports = new authModel();