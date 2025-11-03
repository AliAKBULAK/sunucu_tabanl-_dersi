//değişken tanımı için  let ve const ile yapılır
/*
ecmacript 2015 (ES6) ile birlikte gelen let ve const anahtar kelimeleri, JavaScript'te değişken tanımlamak için kullanılır.
*/

var adi="ali";
//değişken
let yasi=20;
//sabit değişken
const adres="Bingöl";
//ecmascript öncesi
function toplma(a,b){
    return a+b
}
//ecmascript sonrası
const add=(a,b)=> a+b;

if(a==12){
    console.log("a 12'ye eşittir")
}

let total=0
for(let i=0;i<10;i++){
    total+=i
}
// var ile let arasındaki ise
//let ile oluşturduğumuz değişken süslü paraantez ile kullanılmak zorundadır. var'da ise böyle bir zorunluluk yoktur.

function test(){
    if(true){
        let değişken="merhaba"
    }
    if(true){
        console.log(değişken)
    }
}
test()
// tekrar tanımlama hatası
var adi="ali";
var  adi="zeki";
//var tekrar tanımlama hatası vermez,sıkıntı yoktur

/*let yasi=20;
let yasi=25;
*/
//let tekrar tanımlama hatası verir,sıkıntı çıkarır

//hoisting
adi="ali";
console.log(adi)

var adi;
//var ile tanımlanan değişkenler hoisting'e tabidir, bu yüzden hata vermez

let adi;
// atama işlemleri immutable yani değiştirilemez
/*let adi="ali";
const adres="new york";
*/

//rest operatörü
//treditable arguments nesnesi ile
function add(){
    console.log(arguments)
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total;
}
console.log(add(1,2,3,4,5,6))

//rest 

const add=(...args)=>{
    console.log(args)
    let total=0;
    for(let i=0;i<args.length;i++){
        total+=args[i]
    }   
    return total;
}
console.log(add(1,2,3,4,5,6))
//obje python dictionary
//ürün ekleme fonksiyonu

function addToCart(urun_adi,adet,fiyat){
}
addToCart("elma",5,10);
addToCart("armut",3,15);
addToCart("karpuz",1,20);

let urunler=[{
    urun_adi:"elma",
    adet:5,
    fiyat:10
},
{   urun_adi:"armut",
    adet:3,
    fiyat:15
},
{   urun_adi:"karpuz",
    adet:1,
    fiyat:20
}]

function addToCart2(urun){
    console.log(urunler.urun_adi)
    console.log(urunler.adet)
    console.log(urunler.fiyat)  
}

//distracting işlemi
let bolgeler=["dogu anadolu","güneydoğu anadolu","ege","akdeniz"]
console.log(bolgeler[0])

let [dogu,güneydogu,ege,akdeniz]=bolgeler;
console.log(dogu)
console.log(güneydogu)
console.log(ege)
console.log(akdeniz)

//
let [urunler_adi,adet,fiyat]=[
    {urun_adi:"elma",adet:5,fiyat:10},
    {urun_adi:"armut",adet:3,fiyat:15},
    {urun_adi:"karpuz",adet:1,fiyat:20}
];

console.log(urunler_adi)
console.log(adet)
console.log(fiyat)

//filter 
const sayilar=[1,2,3,4,5,6,7,8,9,10]
    
const tekSayilar=sayilar.filter(sayi=>sayi%2===1);
console.log(tekSayilar);

//find
const numbers=[1,2,3,4,5,6,7,8,9,10]
    
const sayi=numbers.find(function(sayi){
    return sayi>4
});
console.log(sayi);


//map
const nums=[1,2,3,4,5]
const katsayi=nums.map(nums=>nums*2)
console.log(katsayi);

//reduce
const n=[1,2,3,4,5]
const toplam=n.reduce((acc,curr)=>acc+curr,0)
console.log(toplam);

//forEach
const say=[1,2,3,4,5]
sayi.forEach(sayi=>{
    console.log(sayi)
});

//hata demeti
try{
    const result=10/0;
    console.log(result) 
}
catch(error){
    console.log("hata:"+error.message)
}
finally{
    console.log("işlem tamamlandı")
}
function bolmeislem(a,b){
    if(b===0){
        throw new Error("Bölen sıfır olamaz")
    } 
    return a/b;
}
try{
    const sonuc=bolmeislem(10,0);
    console.log("sonuc",sonuc)
}      
catch(error){
    console.log("hatan yakalandı:"+error.message)
}