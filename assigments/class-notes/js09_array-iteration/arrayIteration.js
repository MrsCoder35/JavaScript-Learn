//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

const sayilar = [4, 5, 1, 4, 6, 9]
sayilar.forEach((x) => console.log(x))
console.log("************")

//? alternatif
sayilar.forEach(yazdir)
function yazdir(x) {
  console.log(x)
}

//? ORNEK: 2 parametreli forEach
sayilar.forEach((x, i) => console.log("Deger:", x, "sıra:", i))

//? Ornek: toplam
let sum = 0
sayilar.forEach((sayi) => (sum += sayi))
console.log("SUM:", sum)

//? Ornek: 3-parametreli forEach
const notlar = [40, 50, 10, 40, 60, 90]

//! Süslü parantezli olarak da yazılaabilir
// notlar.forEach((not, indis, array) => {
//   array[indis] = not * 1.1
// })

notlar.forEach((not, indis, array) => (array[indis] = not * 1.1))
console.log(notlar)

//? forEach return yapmaz (void function)
console.log(notlar.forEach((x) => x * x)) //? undefined
const deneme = notlar.forEach((x) => x * x)
console.log(deneme) //? undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const copiedNames = names.map((n) => n.toLowerCase())
console.log(copiedNames, names)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 32.97
const dolar = 30.5

const iPhoneTL = [90000, 75000, 60000, 40000, 30000]

const iPhoneDolar = iPhoneTL.map((tl) => Math.trunc(tl / dolar))
const iPhoneEuro = iPhoneTL.map((tl) => Math.trunc(tl / euro))

console.log(iPhoneDolar)
console.log(iPhoneEuro)

//* =======================================
//*            FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

const maaslar = [90000, 75000, 60000, 40000, 30000]

//? maasi 50000 den büyük olanlar
const ortamaMaaslar = maaslar.filter((m) => m >= 50000)
console.log(ortamaMaaslar)

//? maasi 50000 den büyük olanlar
const düsükMaaslar = maaslar.filter((m) => m >= 30000 && m < 50000)
console.log(düsükMaaslar)

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)
maaslar.map((m, i, arr) => {
  if (m >= 30000 && m < 50000) {
    arr[i] = m * 1.2
  }
})

console.log(maaslar)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)

const salary = [90000, 75000, 60000, 40000, 30000]

const zamliMaaslar = salary.filter((m) => m < 50000).map((m) => m * 1.2)
console.log(zamliMaaslar)

// functional programming (declarative programing)
// imperative programming

//* =======================================
//*           REDUCE
//* =======================================

const mayişlar = [40000, 30000, 20000, 100000]
const toplamMaas = mayişlar.reduce((t, m) => t + m, 0)

console.log("Toplam:", toplamMaas)

const sayilarim = [4, 5, 3, 2]
const carpimlar = sayilarim.reduce((t, m) => t * m, 1)
console.log("Carpim:", carpimlar)

//? reduce (3 parametreli)
const toplamSayilarim = sayilarim.reduce((t, s, i) => {
  console.log(`${i} - ${t + s}`)
  return t + s
 
}, 0)
console.log("TOTAL:", toplamSayilarim)

//! Ornek:

const toplamZamliMaas = mayişlar
  .filter((m) => m < 40000)
  .map((m) => m * 1.5)
  .reduce((t, m) => t + m, 0)

console.log(toplamZamliMaas)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 78, 89, 25]
const check = ages.every((age) => age >= 18)

check ? console.log("All ages are over 18") : console.log("Some are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1
