function primeFactors(number) {
 for( var i=2; i <= number/i; i++) {
  console.log("i= " + i + " number: " + number);
 
  while(number%i === 0) {
   number = number/i;
   console.log("Factor= " + i);
  }

 }
 
 if(number > 1) { console.log("Last Factor= " +  number);}
}

primeFactors(1420991);
