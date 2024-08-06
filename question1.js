var array = [10,20,30,40,50];

for(i =0; i<=array.length;i++)
{
    console.log(array[i]);
}
 const n = array[0];
console.log('First element of an array is '+ n);

let flag = true;

if (n === 1) 
   console.log("1 is neither prime nor composite number.");

else if (n > 1) {
    
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
     if (flag) 
        console.log(n + ' is a prime number');
     else 
        console.log(n + ' is not a prime number');
}

else 
    console.log("The number entered by the user is not a prime number.");


