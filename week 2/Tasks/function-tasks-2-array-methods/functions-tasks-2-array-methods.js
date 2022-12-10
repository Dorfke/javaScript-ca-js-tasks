const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');

//Sprendimas 1. 
{
  function mulArrBy2(arr) {
    return arr.map(x => x * 2);
  
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

//  Sprendimas 2.
{
  function powerArrBy2(arr) {
    return arr.map(x => x * x)
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

// Sprendimas 3.
{
    function mulArrElementsByIndex(array)  {
      for (let i = 0; i < numbers.length; i++) {
        const gg = array.map(array => i++ * array)
        return gg
       }
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

// Sprendimas 4.
{
  function filterPositives(arr) {
    return arr.filter(numbers => numbers > 0);
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

// Sprendimas 5.
{
  function filterNegatives(arr) {
    return arr.filter(numbers => numbers < 0);
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
  function filterEquals(arr) {
    return arr.filter(numbers => numbers %2 === 0);
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
  function filterOdds(arr) {
    return arr.filter(numbers => numbers %2);
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
console.log('---');
{
  function arrAbsoluteValues(arr) {
    return absolutes = arr.map(numbers => Math.abs(numbers));
   
  }
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  
}
console.log('---');
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(array) {
    for (let i = 0; i < numbers.length; i++) {
      const gg = array.map(array => array ** i++)
      return gg
     }
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
  function filterNaturals(arr) {
    return arr.filter((numbers)=>{
      if(
          (numbers % 1 == 0) && 
          (numbers > 0) 
      ){
          return true
      }
      return false
  })
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
{
  function absArrElements(arr) {
    return arr.map(numbers => Math.round(numbers))
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
    let numbers2 = []
    for (let i = 0; i < array.length; i += 2){ 
        numbers2.push(array[i]) 
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
    let numbers2 = []
    for (let i = 0; i < array.length; i += 5){ 
        numbers2.push(array[i]) 
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
    array.forEach(numbers => {sum += numbers;});
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
    array.forEach(numbers => {sum += numbers;});
    let average = sum / array.length
    return average;
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
    return maximum = Math.max(...array)
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
      return minimum = Math.min(...array)
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();