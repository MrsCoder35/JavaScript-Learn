/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//? Arrow func tanimlasi
const mesajVer = () => console.log("JS is a browser language")

//? invoke
mesajVer()

//? Ornek
const kareAl = (x) => x * x
console.log(kareAl(3))

//? Ornek
const yasHesapla = (yil) => new Date().getFullYear() - yil

const yil = Number(prompt("Dogum Yili:"))
console.log(`Yasiniz ${yasHesapla(yil)} dır`)

// console.log(new Date())

//? Ornek

const mesajVer1 = () => {
  console.log("Süslü arrow")
}

mesajVer1()

//? Ornek
const kareAl1 = (x) => {
  return x * x
}

console.log(kareAl1(4))

//? Ornek
const tekVeyaCift = (num) => {
  let sonuc = ""

  if (num % 2 === 0) {
    sonuc = `${num} ciftir`
  } else {
    sonuc = `${num} tektir`
  }
  return sonuc
}

const bilgi = tekVeyaCift(5)
console.log(bilgi)

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//* (Hesap Makinası)
//**************************************************/
const topla = (s1, s2) => s1 + s2
const carp = (s1, s2) => s1 * s2
const cikar = (s1, s2) => s1 - s2
const bol = (s1, s2) => s1 / s2

const hesapla = (num1, num2, op) => {
  let sonuc = 0
  switch (op) {
    case "+":
      sonuc = topla(num1, num2)
      break
    case "-":
      sonuc = cikar(num1, num2)
      break
    case "/":
      sonuc = bol(num1, num2)
      break
    case "*":
      sonuc = carp(num1, num2)
      break
    default:
      alert("Yanlis islem")
      break
  }
  return sonuc
}
const num1 = +prompt("1.Sayi:")
const op = prompt("Islemi giriniz: +,-,*,/:")
const num2 = +prompt("2.Sayi:")
const sonuc = hesapla(num1, num2, op)
console.log(`${num1}${op}${num2}=${sonuc}`)
