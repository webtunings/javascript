function sqrt(number) {
 var start = number;
 var error = 0.00001;


 while((start - number/start) > error) {
 start = (start + number/start)/2;
 console.log('intermediate result= ' + start); 
 }
 return start;
}

var result = sqrt(234123333);
console.log('final result= ' + result);
