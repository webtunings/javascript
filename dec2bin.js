function dec2bin(number) {
 var bin = "";

 while(number > 0) {
 bin = number%2 + bin;
 number = Math.floor(number/2);
 }

 return bin;
}

console.log(dec2bin(100));
