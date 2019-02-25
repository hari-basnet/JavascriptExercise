/* Which are true or which are false ?
4 > 3 && 10 < 12    true
4 > 3 && 10 > 12    false
4 > 3 || 10 < 12    true
4 > 3 || 10 > 12    true
!(4 > 3)            false   
!(4 < 3)            true
!(false)            true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 ===’4’)         true    
 */

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
