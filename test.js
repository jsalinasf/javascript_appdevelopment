const josephus = (items, k) => {
    
    const removeDeath = (removeArr, originalArr) => {
        for (let i=0; i<removeArr.length; i++) {
            let start = originalArr.indexOf(removeArr[i])
            originalArr.splice(start,1);
        }
    }
    
    let nextRound = 1;
    let limit = items.length
    let returnArray = [];
    let auxArray = [];

    while (returnArray.length < limit) {

        for (let i=0; i<items.length; i++) {
            if (nextRound === k) {
                auxArray.push(items[i]);
                nextRound = 1;
            } else {
                nextRound ++;
            }
        }
    
        returnArray = returnArray.concat(auxArray);        
        removeDeath(auxArray, items);
        auxArray = [];        
    }
    return returnArray;
}

console.log(josephus([1,2,3,4,5,6,7],3));  // [3,6,2,7,5,1,4]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));  // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(["C","o","d","e","W","a","r","s"],4)); // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

