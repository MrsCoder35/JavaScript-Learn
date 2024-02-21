//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "bes", "four", 3, 6, "4", "bes", "1", 3, "bes"]

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes("4")) //? true
console.log(numbers.includes("44")) //? false
console.log(numbers.includes("BES".toLowerCase())) //? false
console.log(numbers.includes("four", 6)) //? false

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf("bes")) //? 4
console.log(numbers.lastIndexOf("bes")) //? 11
console.log(numbers.indexOf("bes", 5)) //? 8
console.log(numbers.indexOf("beslik")) //? -1

if (numbers.indexOf(66) < 0) {
  console.log("Aranan bulunamadi")
} else {
  console.log(`Aradiginiz sayi ${numbers.indexOf(66)} indisinde bulunmuştur`)
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
const joinedArray = numbers.join("-")
console.log(joinedArray)
console.log(numbers)

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString())

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"]
const time = new Date().toDateString()
console.log(time, message)

const concatedArray = message.concat("hello", time, "JS")
console.log(concatedArray)

console.log(concatedArray.reverse().join(" "))

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
let cars = ["BMW", "Mercedes", "Fiat", "Togg"]

const slicedCars = cars.slice(1) //?  ['Mercedes', 'Fiat', 'Togg']
console.log(slicedCars, cars)

console.log(cars.slice(0, 2)) //?['BMW', 'Mercedes']
