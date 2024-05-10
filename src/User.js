class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedin = false
  }

  //log in method
  login(password){
    if (password === this.password){
      this.loggedin = true;
    } else {
      throw new Error("Incorrect Password")
    }
  }


  //log out method
  logout(){
this.loggedin = false
  }
}

module.exports = User
