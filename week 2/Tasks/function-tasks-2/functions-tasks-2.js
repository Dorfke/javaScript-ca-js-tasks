// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(array) {
    const numbers2 = [];
    for (let i = 0; i < array.length; i++) {
        numbers2[i] = array[i] * 2
    }
    return numbers2
  } 
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(array) {
    let numbers2 = [];
    for (let i = 0; i < array.length; i++) {
        numbers2[i] = array[i] ** 2;
    }
    return numbers2;
  } 
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(array) {
   let numbers2 = [];
   for (let i = 0; i < array.length; i++) {
    numbers2[i] = array[i] * i 
   }
   return numbers2
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(array) {
    let numbers2 = [];
    let g = -1
    for (let i = 0; i < array.length  ; i++) {
        g++;
        if (array[i] > 0){numbers2[g] = array[i]}
        else { g--; }
    }
    return numbers2
  }
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(array) {
    let numbers2 = [];
    let g = -1
    for (let i = 0; i < array.length; i++) {
      g++;
      if (array[i] < 0){numbers2[g] = array[i]}
      else {g--;}
    }
    return numbers2
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(array) {
    let numbers2 = [];
    let g = -1;
    for (let i = 0; i < array.length; i++) {
      g++;
      if (array[i] % 2 === 0){ numbers2[g] = array[i]} 
      else {g--;};
    }
    return numbers2
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(array) {
    let numbers2 = [];
    let g = -1;
    for (let i = 0; i < array.length; i++) {
      g++;
      if (array[i] % 2 !== 0){ numbers2[g] = array[i]} 
      else {g--;};
    }
    return numbers2
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(array) {
    let numbers2 = [];
    let g = -1
    for (let i = 0; i < array.length; i++) {
      g++;
      if ( array[i] < 0) {numbers2[g] = array[i] * -1}
      else {numbers2[g] = array[i];}
    }
    return numbers2
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(array) {
    let numbers2 = [];
    for (let i = 0; i < array.length; i++) {
     numbers2[i] = array[i] ** i 
    }
    return numbers2
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(array) {
   let numbers2 = [];
   let g = -1;

   for (let i = 0; i < array.length; i++) {
    g++;
    if (array[i] %1 === 0 && array[i] > 0) 
     {numbers2[g] = array[i]} else { g--}
   }
   return numbers2
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
//Nesugebejau su ciklais ir for/while 
{
  function absArrElements(array) {
    let numbers2 = [];
    for (let i = 0; i < array.length; i++) {
      numbers2[i] = Math.round(array[i]);
    }
    return numbers2
    }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(array) {
    let numbers2 = [];
    let g = -1
    for (let i = 0; i < array.length; i += 3) {
      g++;
      if (array[i] += 0) {numbers2[g] = array[i]}
      else {g--}
     }
    return numbers2
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(array) {
    let numbers2 = [];
    let g = -1
    for (let i = 0; i < array.length; i += 5) {
      g++;
      if (array[i] += 0) {numbers2[g] = array[i]}
      else {g--}
     }
    return numbers2
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(array) {
    for (let i = 0; i < array.length; i++){
      console.log('[' + (i) + ']' + '. ' + ' ' + '=>' + ' ' + array[i])
    }
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(array) {
    let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
    sum += array[i];
}
    let average = sum / array.length;
    return average
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(array) {
    let n = array[0];
    for (let i = 1; i < array.length; i++) {
      if(n < array[i]) {n = array[i];}
    }
    return n;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(array) {
    let n = array[0];
    for (let i = 1; i < array.length; i++) {
      if(n > array[i]) {n = array[i];}
    }
    return n;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();