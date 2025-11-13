export default class UserService {
    //add fonksiyonu yeni bir user eklemek için
    //list fonksiyonu ekliyeceğiz
    //getbyid fonksiyonu belirli idye göre user getirme

    constructor() {
        this.users = []
    }
    add(user) {
        this.users.push(user)
    }
    list() {
        return this.users
    }
    getByid(){
        return this.user.find(u => u.id === id)
}
}
//CRUD: Create, Read, Update, Delete
//insert, select, update, delete
console.log("User Service Yüklendi")
