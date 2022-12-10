const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    },
    {
      name: 'Valdas',
      surname: 'Vilktorinas',
      sex: 'male',
      age: 16,
      income: 0,
      married: false,
      hasCar: false
    },
    {
      name: 'Virginijus',
      surname: 'Uostauskas',
      sex: 'male',
      age: 32,
      income: 2400,
      married: true,
      hasCar: true
    },
    {
      name: 'Samanta',
      surname: 'Uostauskienė',
      sex: 'female',
      age: 28,
      income: 1200,
      married: true,
      hasCar: true
    },
    {
      name: 'Janina',
      surname: 'Stalautinskienė',
      sex: 'female',
      age: 72,
      income: 364,
      married: false,
      hasCar: false
    }
  ];
  console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
  {
    function printNames(person) {
        for (let i = 0; i < person.length; i++){
          console.log(person[i])
        }
      }
      printNames(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
  {
    for(person of people) {
        console.log(`${person.name} - ${person.surname}`);
  }
}
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
  {
    function printNames(person) {
       
        console.log(`${person.name} - ${person.surname}` + ' ' + '. ' + ' Married?' + ' ' + ' ==>' + ' ' +  person.married);
      }
      people.forEach(printNames)
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
  { 
    let array = [];
    for(person of people) {
        let changeArray = {
            'sex': person.sex,
            'income': person.income
        }
        array.push(changeArray);
    }
    console.log(array);
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
  {
    let array = []
    for(person of people) {
        let changeArray = {
            "name": person.name,
            "surname": person.surname,
            "sex": person.sex,
        }
        array.push(changeArray);
    }
    console.log(array);
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinkite visus vyrus');
  {
    let onlyMales = people.filter(gender => gender.sex === 'male');

   console.log(onlyMales);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinkite visas moteris');
  {
    let onlyFemales = people.filter(gender => gender.sex === 'female') 

   console.log(onlyFemales);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
  {
    let onlyCars = people.filter(withCars => withCars.hasCar === true) 

   console.log(onlyCars);
  }
  console.groupEnd();
  
  console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
  {
    let onlyMarried = people.filter(marriage => marriage.married === true) 

    console.log(onlyMarried);
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
   let femaleDriving = 0;
   let maleDriving = 0;

   function peopleDriving(pers){

    if (pers.sex === 'female' && pers.hasCar === true)
    femaleDriving++;

    else if (pers.sex === 'male' && pers.hasCar === true)
    maleDriving ++;

   }
   people.forEach(peopleDriving);

   console.log({femaleDriving, maleDriving});
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    
    const output = people.map( changeIncome => {
        if ( changeIncome.hasOwnProperty("income") )
        {
            changeIncome.salary = changeIncome.income;
           delete changeIncome.income
        }
        return changeIncome;
      })
      console.log(output)
  }
  console.groupEnd();
  
  console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
  {
    let  newArray = [];
    for(person of people) {

        changeOfArray = JSON.parse(JSON.stringify(person));


        delete changeOfArray ['sex'];
        delete changeOfArray ['name'];
        delete changeOfArray ['surname'];


        newArray.push(changeOfArray);
    }
    console.log(newArray);
  }
  console.groupEnd();
  
  console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
  {
    let array = [];
    for(person of people) {

        changePerson = JSON.parse(JSON.stringify(person));

        const str = `${changePerson['name']} ${changePerson['surname']}`;
        changePerson.fullname = str;

        delete changePerson['name'];
        delete changePerson['surname'];
        
        array.push(changePerson);
    }
    console.log(array);
    }
  console.groupEnd();