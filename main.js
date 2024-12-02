let Prompt1 = prompt("So'z kiriting:");


if (Prompt1.includes('n') || Prompt1.includes('N')) {
  alert(`Yozgan so'zingizda "n" harifi mavjud: ${Prompt1}`)
  console.log(`Yozgan so'zingizda "n" harifi mavjud:`, Prompt1);
} else {
  alert(`Yozgan so'zingizda "n" harifi mavjud emas: ${Prompt1}`)
  console.log(`Yozgan so'zingizda "n" harifi mavjud emas:`, Prompt1);
}
