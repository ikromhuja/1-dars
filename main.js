//1. SyntaxError -yani xatolik yozuvda bo'ladi
// let a = 1;
// const a=1;

//2.Runtime error - bu turdagi xatolar asosan dastur ishga tushganda sodir bo'ladi.Va bu paytdagi sodir bo'lgan xatoliklar  exceptions(istisno) deyiladi

// TDZ-temporary dead zone yani let a o'zgaruvchisigacha bolgan oraliq

// console.log(a);
// let a = 1;

// 4.try...catch ifodasi
// try...catch ifodasi istisnolarni  ushlashgayordam beradi

// throw - try ichida xatolik yuz berishini bilganimzidan so'ng throw Error() kalit so'zi orqali try ichidagi xatolikni elon qilishimiz mumkin.
// va throw kalit so'zidan keyin kod yozilmaydi return,break...kabi uning vazifasi ham dasturni toxtatadi. batafsil quyida korsatilgan

// let errorNumber = 404;
// try {
//   if (errorNumber === 404) {
//     throw Error("Bu text throw Errordan kelayapti");
//   }
// } catch (error) {
//   console.log(error.message);
// }
// let b = 2;
// console.log(b);
// let c = 3;
// console.log(c);

// 5.finally - sizda tryda muammo bo'lib catch ishga tushadimi,tryda muammo bo'lmasdan catch ishlamaydimi farqi yo'q finally ohirada ishlayveradi.Ya'ni try{}va catch{} tuganlanganligini bildiradi.

//

///

import "./app2.js";
