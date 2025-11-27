// ...existing code...
import UserService from "../Services/userServices";
import User from "../components/User.js";
console.log("user service yüklendi")
let userService = new UserService()

let user1 = new User(1, "Can", "Aydın", "İzmir")
let user2 = new User(2, "Ahmet", "Uzun", "Ankara")
// ...existing code...
