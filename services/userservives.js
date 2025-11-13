export default class UserService{
//add fonksiyonu yeni bir user eklemek için
//list fonksiyonu ekliyeceğiz
//getbyid fonksiyonu belirli idye göre user getirme

constructor(){
    this.user=[]
}
add(user){
    this.users.push(user)
}
list(){
    return this.users
}
getByid({
    return this.user.find(u=>u.id===id)
})
}