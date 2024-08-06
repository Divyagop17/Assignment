// The sum of squares of the elements in an array
function sum_sqr(array,n) {
    var sum = 0, 
        i = array.length;
  
    while (i--)
      
      sum += Math.pow(array[i], 2);
   
   return sum;
  }
  
  console.log('Sum of squares of the given element is '+ sum_sqr([2, 4, 6, 8]));