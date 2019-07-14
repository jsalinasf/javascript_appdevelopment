const josephus = (items, k) => {
    
    let nextRound = 1;
    let returnArray = [];
    let i=0;

    while (items.length >= 1) {
        
        if (nextRound === k) {
            returnArray.push(items[i]);
            items.splice(i,1);
            nextRound = 1;
        } else {
            nextRound ++;
            i++;
        }
        if (i >= items.length) i=0;
    }
    return returnArray;
}

console.log(josephus([1,2,3,4,5,6,7],3));  // [3,6,2,7,5,1,4]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));  // [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(["C","o","d","e","W","a","r","s"],4)); // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']

console.log(josephus([true,false,true,false,true,false,true],3));
console.log(`[ true, false, false, true, true, true, false ]`);
