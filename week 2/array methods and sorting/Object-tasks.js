console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        const Drink =  drinks.sort(function(a,b){
            return a.price - b.price 
        });
        return drinks
    }
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        return ({...obj, [name]: value})
    }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        if (y === 'm'){
            switch(x){
                case 3: return 'great grandson';
                case 2: return 'grandson';
                case 1: return 'son';
                case 0: return 'me!';
                case -1: return 'father';
                case -2: return 'grandfather';
                case -3: return 'great grandfather';		
            }
        } else{
            switch(x) {
                    case 3: return 'great granddaughter';
                case 2: return 'granddaughter';
                case 1: return 'daughter';
                case 0: return 'me!';
                case -1: return 'mother';
                case -2: return 'grandmother';
                case -3: return 'great grandmother';		
            }
        }
    }
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        let bl = 0 
        for(let nl = 0; nl < tileHand.length; nl++){
            bl += tileHand[nl]['score'];
        } return bl
    }
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        return (Object.values(obj)).reduce((a, b) => a + b) - limit
    }
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj);
    }
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        return Math.min(...Object.values(inks))
   }
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();